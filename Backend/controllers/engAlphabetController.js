const EnglishAlphabet = require("../model/englishAlphabet");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");

const createAlphabet = async (req, res) => {
  try {
    const { key, text, storyText, image, storyAudio, textAudio } = req.body;
    if (!key || !text || !storyText || !storyAudio || !textAudio || !image) {
      throw new CustomError.BadRequestError(
        "Enter every field to create an item"
      );
    }

    if (key === Number) {
      throw new CustomError.BadRequestError("Key must be a number");
    }

    const duplicateKey = await EnglishAlphabet.find({ key: key });
    if (duplicateKey.length !== 0) {
      throw new CustomError.BadRequestError("Key already exists");
    }

    const newAlphabet = new EnglishAlphabet({
      key,
      text,
      storyText,
      image,
      storyAudio,
      textAudio,
    });

    newAlphabet.save();

    res.status(StatusCodes.OK).json(newAlphabet);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err });
  }
};

const getAllAlphabet = async (req, res) => {
  try {
    const alphabet = await EnglishAlphabet.find();
    res.status(StatusCodes.OK).json(alphabet);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err });
  }
};

//update the alphabet
const updateAlphabet = async (req, res) => {
  try {
    const { key, text, textAudio, storyText, storyAudio } = req.body;

    const duplicateKey = await EnglishAlphabet.find({ key: key });
    if (duplicateKey.length !== 0) {
      throw new CustomError.BadRequestError("Key already exists");
    }

    const update = {};
    if (key) update.key = key;
    if (text) update.text = text;
    if (textAudio) update.textAudio = textAudio;
    if (storyText) update.storyText = storyText;
    if (storyAudio) update.storyAudio = storyAudio;

    const updatedItem = await EnglishAlphabet.findOneAndUpdate(
      { _id: req.params.id },
      { $set: update },
      { new: true }
    );
    res.status(200).json({ updatedItem, msg: "you have successfully updated" });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
  }
};

module.exports = { createAlphabet, getAllAlphabet, updateAlphabet };
