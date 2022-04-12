const express = require('express');
const router = express.Router();
const databaseController = require('../controller');


router.get('/data', databaseController.data);


router.get('/test',(req,res)=>{
    return res.json({message:'it works'})
})

module.exports = router;