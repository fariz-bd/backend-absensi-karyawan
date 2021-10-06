const konek = require('../config');
const model = require('../model/sub_bagian');

class Sub_bagian{
    static add (req, res){
        model.create({nama_subbagian: req.body.nama, bagianId: req.body.bagianId})
        .then(data => res.json({message: `Success add sub bagian!.`, data: data}))
        .catch(data => res.json({message: data.message}));
    }

    static all (req, res){
        model.findAll()
        .then(data => res.json({message: `Success get all!.`, data: data}))
        .catch(data => res.json({message: data.message}));
    }

    static delete (req, res){
        model.destroy({where: {id: req.params.id}})
        .then(data => res.json({message: `delete success!.`, data: data}))
        .catch(data => res.json({message: data.message}));
    }
    static edit(req, res){
        // console.log(req.body);
        let form = {}
        if(req.body.nama){
            form.nama_subbagian = req.body.nama;
        }
        if(req.body.bagianId){
            form.bagianId = req.body.bagianId;
        }
        if(!req.body.nama && !req.body.bagianId){
            res.json({message: 'Please insert data!.'})
        }
        else{
            model.update(form, {where : {id: req.params.id}})
            .then(data => res.json({message: `Success update data.!`, data: data}))
            .catch(data => res.json({message: data.message}));
        }
    }
}

module.exports = Sub_bagian;