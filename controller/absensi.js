const model = require('../model/absensi');
const db = require('../config');

class Absensi{
    static add(req, res){
        let date = new Date();
        model.create({tanggal: date, foto: req.file.filename, userId: req.data.id})
        .then(data => res.json({message: `Success add data!.`, data: data}))
        .catch(data=> res.json({message: data.message}));
    }

    static all(req, res){
        let date = new Date();
        let tanggal = date.getDate();
        let bulan = date.getMonth()+1;
        let tahun = date.getFullYear();
        // console.log(bulan);
        let tgl = tahun+'-'+bulan+'-'+tanggal;
        db.query(`SELECT * FROM absensi JOIN public.user ON absensi."userId" = public.user.id WHERE DATE(absensi.tanggal) = '${tgl}'`)
        .then(data => res.json({message: `Success`, data: data[0]}))
        .catch(data => res.json({message: data.message}));
    }
}

module.exports = Absensi;