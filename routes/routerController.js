const express = require('express');
const router = express.Router();
const databaseRouter = require('./databaseRouter')

//login route
router.use('/database',databaseRouter);


module.exports = router;