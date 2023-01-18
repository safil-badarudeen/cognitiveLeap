const mongoose = require("mongoose");

const englishAlphabetSchema = new mongoose.Schema(
  {
    key: {
      type: String,
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
    wordAudio: {
      type: String,
      required: true,
    },
    StoryAudio: {
      type: String,
      required: true,
    },
  },
  
);

module.exports = mongoose.model("EnglishAlphabet", englishAlphabetSchema);
