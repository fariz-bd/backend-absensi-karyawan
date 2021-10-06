const model = require('../model/tunjangan');

class Tunjangan{
    static add(req, res){
        model.create({jabatan : req.body.jabatan, jumlah: req.body.jumlah})
        .then(data => res.json({message: `Success add data!.`, data: data}))
        .catch(data => res.json({message: data.message}));
    }

    static delete(req, res){
        model.destroy({where: {id: req.params.id}})
        .then(data => {
            if(data == 0){
                res.json({message: `Data undefined!.`, data: data})
            }else{
                res.json({message: `Success delete data!.`, data: data})
            };
        })
        .catch(data => res.json({message: data.message}));
    }
    
    static edit(req, res){
        let form = {};
        if (req.body.jabatan){
            // console.log(`ada`);
            form.jabatan = req.body.jabatan
        }
        if (req.body.jumlah){
            form.jumlah = req.body.jumlah
        }
        if (!req.body.jabatan && !req.body.jumlah){
            res.json({message: 'Please insert data!.'});
        }else{
            // console.log(form);
            model.update(form ,{where: {id: req.params.id}})
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

    static all(req, res){
        model.findAll()
        .then(data => res.json({message: `Success get data!.`, data: data}))
        .catch(data => res.json({message: data.message}));
    }
}

module.exports = Tunjangan;