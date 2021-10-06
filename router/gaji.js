const express = require('express');
const router = express.Router();
const controller = require('../controller/gaji');


router.get('/all', controller.all);


module.exports = router;