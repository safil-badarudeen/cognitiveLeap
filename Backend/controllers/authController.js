//.env
require("dotenv").config();
const Admin = require("../model/admin");
const CustomError = require("../errors");         
const { StatusCodes } = require("http-status-codes");
const { check, validationResult } = require("express-validator");
const { secureResponse } = require("../utils/secureResponse");
const { createJWT } = require("../utils/jwt");

const register = async (req, res) => {
  try {
    await check("name").isLength({ min: 3 }).run(req);
    await check("password").isLength({ min: 6 }).run(req);
    await check("mobile").isLength({ min: 10 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errorMsg: "Some error, check email,username or password " });
    }

    const { mobile, name, password, confirmPassword } = req.body;
    if (!process.env.ADMIN.includes(mobile)) {
      throw new CustomError.UnauthorizedError(
        "This mobile number does not have a access as admin"
      );
    }

    if (password !== confirmPassword) {
      throw new CustomError.BadRequestError("Password does not match");
    }

    const existingUser = await Admin.findOne({ mobile });
    if (existingUser) {
      throw new CustomError.BadRequestError(
        "user already  registered please login"
      );
    }

    // otp authorization

    const admin = await Admin.create({
      mobile,
      name,
      password,
    });

    admin.save();
    //response without password
    const secureData = secureResponse(admin);
    res
      .status(StatusCodes.OK)
      .json({ msg: `${name}Successfully Registered`, Data: secureData });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ "Internal server error ": err });
  }
};

const login = async (req, res) => {
  try {
    const { mobile, password } = req.body;
    await check("password").isLength({ min: 6 }).run(req);
    await check("mobile").isLength({ min: 10 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errorMsg: "Some error,mobilenumber  or password " });
    }

    const admin = await Admin.findOne({ mobile });

    if (!admin) {
      throw new CustomError.BadRequestError("Not a valid user");
    }

    const verifyPassword = await admin.comparePassword(password);
    if (!verifyPassword) {
      throw new CustomError.UnauthorizedError("invalid password");
    }

    const token = await createJWT({
      id: admin._id,
      name: admin.name,
    });

    const secureData = secureResponse(admin);

    res.status(StatusCodes.OK).json({ data: secureData, accessToken: token });
  } catch (err) {
    console.log(err);
  }
};

const logout = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register, login };
