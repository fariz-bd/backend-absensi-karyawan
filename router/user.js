const express = require('express');
const router = express.Router();
const controller = require('../controller/user');


// router.get('/all:id', (req, res)=>{
//     res.send(req.params.id)
// })
router.get('/all', controller.all);

router.post('/add', controller.add);

router.put('/edit/:id', controller.edit);

router.delete('/delete/:id', controller.delete);

module.exports = router;