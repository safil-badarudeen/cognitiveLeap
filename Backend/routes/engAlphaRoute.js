const express = require('express');
const router = express.Router();
const{createAlphabet, getAllAlphabet, updateAlphabet , getOneAlphabet}=require('../controllers/engAlphabetController');
       


router.route('/createAlphabet').post(createAlphabet)
router.route('/getAllAlphabet').get(getAllAlphabet)
router.route('/updateAlphabet/:id').patch(updateAlphabet)
router.route('/getOneAlphabet/:id').get(getOneAlphabet)

module.exports = router