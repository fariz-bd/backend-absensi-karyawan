const model = require('../model/gaji');
const db = require('../config');
var cron = require('node-cron');
const moment = require('moment');

class Gaji{
    static all(req, res){
        model.findAll()
        .then(data => res.json({message: `Success get all data!.`, data: data}))
        .catch(data => res.json({message: data.message}));
    }
    static async create(req, res){
        await db.query(`SELECT * FROM public.user`)
        .then(async data => {
            let date = new Date();
            let akhir_bulan = new Date(date.getFullYear(), date.getMonth()+1, 0);
            let awal_bulan = new Date(date.getFullYear(), date.getMonth(), 1);
            let jml_hari = akhir_bulan.getDate();
            let tgl = awal_bulan.getDate();
            let bln = awal_bulan.getMonth();
            let thn = awal_bulan.getFullYear();
            let dataTgl = tgl+'-'+bln+'-'+thn
            // console.log(dataTgl);

            let user = data[0];
            for(let i = 0; i < user.length; i++){
                let absensi = await db.query(`SELECT COUNT(*)FROM absensi WHERE "userId" = ${user[i].id} AND (tanggal BETWEEN '${dataTgl}' AND NOW())`);
                let absen = jml_hari - absensi[0][0].count;
                let tunjangan = await db.query(`SELECT jumlah FROM public.user JOIN tunjangan ON public.user."tunjanganId" = tunjangan.id WHERE public.user.id = ${user[i].id}`);
                let jTunjangan = tunjangan[0][0].jumlah;
                // console.log(jTunjangan);
                let potongan = absen * 50000;
                let total = 2000000 + jTunjangan - potongan;
                // res.json({data: jTunjangan})
                // console.log(total);
                // console.log(potongan);
                let idNya = user[i].id;
                // console.log(idNya);
                // model.create({tunjangan: tunjangan})
                await db.query(`INSERT INTO gaji ("tunjangan", "gapok", "absen", "potongan", "totalGaji", "userId") VALUES (${jTunjangan}, 2000000, ${absen}, ${potongan}, ${total}, ${idNya})`);

            }
        })
    }
}



module.exports = Gaji;