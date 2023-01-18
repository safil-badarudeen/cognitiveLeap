//.env
require("dotenv").config();
const Admin = require("../model/admin");
const CustomError = require("../errors");
const { findOne } = require("../model/admin");
const { StatusCodes } = require("http-status-codes");
const { body, check, validationResult } = require("express-validator");

const register = async (req, res) => {
  try {
    await check("email").isEmail().run(req);
    await check("username").isLength({ min: 5 }).run(req);
    await check("password").isLength({ min: 6 }).run(req);

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

    res.status(StatusCodes.OK).json();
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ "Internal server error ": err });
  }
};

const login = async (req, res) => {
  try {
    //check if user with mobile number exists
    //enter password
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

module.exports = { register };
