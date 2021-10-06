const express = require('express')
const router = express.Router()
const controller = require('../controller/absensi');
const multer = require('multer');
const sharp = require('sharp');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './image/');
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now()+file.originalname);
    }
});
const upload = multer({storage: storage})

function resize(req, res, next){
    sharp('./'+req.file.path).toBuffer()
        .then(data => {
                sharp(data).resize(150).toFile('./'+req.file.path, (err, data) => {
                    next();
                });
            }
        ).catch(err => res.json({message: err.message}));
}

router.post('/add',upload.single('foto'), resize, controller.add);

router.get('/all', controller.all);

// router.post('/add', (req, res)=>{
//     console.log(req.body.nama);
// });



module.exports = router;