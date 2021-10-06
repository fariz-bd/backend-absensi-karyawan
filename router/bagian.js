const express = require('express');
const router = express.Router();
const controller = require('../controller/bagian');


router.post('/add', controller.add);
router.get('/all', controller.all);
router.put('/edit/:id', controller.edit);


module.exports = router;