const mongoose = require("mongoose");

const englishAlphabetSchema = new mongoose.Schema(
  {
    key: {
      type: Number,
      trim: true,
    },
    text:{
        type:String,
        required:true,
    },
    storyText:{
        type:String,
        required:true,
    },
    image: {
      type: String,
      required: true,
    },
    textAudio: {
      type: String,
      required: true,
    },
    uid:{
      type:  String,
      required: true,
    },
    storyAudio: {
      type: String,
      required: true,
    },
  },
  
);

module.exports = mongoose.model("EnglishAlphabet", englishAlphabetSchema);
