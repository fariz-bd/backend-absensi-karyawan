const express = require('express');
const router = express.Router();
const controller = require('../controller/sub_bagian');

router.get('/all', controller.all);
router.post('/add', controller.add);
router.delete('/delete/:id', controller.delete);
router.put('/edit/:id', controller.edit)

module.exports = router;

