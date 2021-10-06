const express = require('express');
const router = express.Router();
const controller = require('../controller/tunjangan');


router.get('/all', controller.all);

router.post('/add', controller.add);

router.put('/edit/:id', controller.edit);

router.delete('/delete/:id', controller.delete);

module.exports = router;