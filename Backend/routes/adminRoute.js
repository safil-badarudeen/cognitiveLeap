const express = require('express')
const router = express.Router()
const{register,login }=require('../controllers/authController')
       


router.route('/register/admin').post(register)
router.route('/login/admin').get(login)


module.exports = router