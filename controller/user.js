const model = require('../model/user');
const bcrypt = require('bcrypt');

class User{
    static add(req, res){
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password, salt);
        model.create({NIK: req.body.NIK, nama: req.body.nama, email: req.body.email, password: hash, jabatan: req.body.jabatan, bagianId: req.body.bagianId, subbagianId: req.body.subbagianId, tunjanganId: req.body.tunjanganId})
        .then(data => res.json({message: `Success add user!.`, data: data}))
        .catch(data => res.body({message: data.message}));
    }

    static all(req, res){
        model.findAll()
        .then(data => res.json({message: `Success get all!.`, data: data}))
        .catch(data => res.json({message: data.message}));
    }

    static delete (req, res){
        model.destroy({where: {id: req.params.id}})
        .then(data => {
            if(data == 0){
                res.json({message: `Data undifined!.`, data: data});
            }else{
                res.json({message: `delete success!.`, data: data});
            }
        })
        .catch(data => res.json({message: data.message}));
    }
    static edit(req, res){
        let form = {};
        if(req.body.NIK){
            form.NIK = req.body.NIK;
        }
        if (req.body.nama){
            form.nama = req.body.nama;
        }
        if (req.body.email){
            form.email = req.body.email;
        }
        if (req.body.password){
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(req.body.password, salt);
            form.password = hash;
        }
        if (req.body.jabatan){
            form.jabatan = req.body.jabatan;
        }
        if (req.body.bagianId){
            form.bagianId = req.body.bagianId;
        }
        if (req.body.subbagianId){
            form.subbagianId = req.body.subbagianId;
        }
        if (req.body.tunjanganId){
            form.tunjanganId = req.body.tunjanganId;
        }
        if(!Object.keys(form).length){
            res.json({message: `Please insert data!.`})
        }else{
            model.update(form, {where : {id: req.params.id}})
            .then(data => {
                if(data[0] == 0){
                    res.json({message: `Data undifined!`, data: data});
                }else{
                    res.json({message: `Success update data.!`, data: data});
                }
            })
            .catch(data => res.json({message: data.message}));
        }
    }
}

module.exports = User;