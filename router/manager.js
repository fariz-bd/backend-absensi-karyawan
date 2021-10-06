const controller = require('../controller/manager');
const express = require('express');
const router = express.Router();

router.get('/bagian', controller.bagian);

router.get('/gaji', controller.gaji);

module.exports = router;