const model = require('../model/bagian');
const konek = require('../config');

class Controller {
    static add (req, res){
        model.create({nama_bagian: req.body.nama})
        .then(data => res.json({ message: `Success add bagian.!`, data: data}))
        .catch(data => res.json({message: data.message}));
    }

    static all (req, res){
        model.findAll()
        .then(data => res.json({message: `Success get all!.`, data: data}))
        .catch(data => res.json({message: data.message}));
    }

    static edit(req, res){
        if(!req.body.nama){
            res.json({message: `Please insert data!.`})
        }else{
            model.update({nama_bagian: req.body.nama}, {where : {id: req.params.id}})
            .then(data => {
                if(data[0] == 0){
                    res.json({message: `Data undefined!.`, data: data})
                }else{
                    res.json({message: `Success edit data!.`, data: data})
                };
            })
            .catch(data => res.json({message: data.message}));
        }
    }
}

module.exports = Controller;