const express = require('express');
const router = express.Router();
const{createAlphabet, getAllAlphabet, updateAlphabet }=require('../controllers/engAlphabetController');
       


router.route('/createAlphabet').post(createAlphabet)
router.route('/getAllAlphabet').get(getAllAlphabet)
router.route('/updateAlphabet/:id').patch(updateAlphabet)


module.exports = router