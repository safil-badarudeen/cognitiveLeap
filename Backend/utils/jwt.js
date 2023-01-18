const jwt = require('jsonwebtoken')
require("dotenv").config();


const createJWT = (payload)=>{
    return jwt.sign(payload, process.env.JWT_SECRET)
}

module.exports= {createJWT}