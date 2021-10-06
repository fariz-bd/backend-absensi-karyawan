const user = require('../model/user');
const db = require('../config');

class Manager{
    static bagian(req, res){
        user.findAll({where: {bagianId: req.data.bagianId}})
        .then(data => res.json({message: `success`, data: data}))
        .catch(data => res.json({message: data.message}));
    }

    static gaji(req, res){
        let id = parseInt(req.data.id)
       db.query(`SELECT * FROM gaji JOIN public.user ON gaji."userId" = public.user.id JOIN bagian ON public.user."bagianId" = bagian.id JOIN subbagian ON public.user."subbagianId" = subbagian.id WHERE public.user."bagianId" = ${id}`)
        .then(data => res.json({message: `Success`, data: data[0]}))
        .catch(data => res.json({message: data.message}));
    }

}

module.exports = Manager;