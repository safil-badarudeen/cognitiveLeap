const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile:{
      type:Number,
      required:true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


adminSchema.pre('save', async function(next) {
  // console.log(this.modifiedPaths())
  // console.log(this.isModified('name'))
 if(!this.isModified('password'))return
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hashSync(this.password, salt);
  next();
});


adminSchema.methods.comparePassword=function(candidatePassword){
  const isMatch= bcrypt.compareSync(candidatePassword,this.password)
  return isMatch
}




module.exports = mongoose.model("Admin", adminSchema);
