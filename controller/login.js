const model = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('../middleware/token');

class Login{
    static login(req, res){
        model.findAll({where: {email: req.body.email}})
        .then(data1 =>{ 
            if (data1.length){
                bcrypt.compare(req.body.password, data1[0].password, (err, data)=>{
                    if(data == false){
                        res.json({
                            message: `Password incorect!.`,
                            data: []
                        })
                    }else{
                        jwt.add(data1[0])
                        .then(datatoken => res.json({
                            message: `Login success!.`,
                            token: datatoken
                        })).catch(datatoken => res.json({
                            message: datatoken.message
                        }))
                    }
                })
            }else{
                res.json({
                    message: `Email does not registered!.`,
                    data : []
                })
            }
        }).catch(data => res.json({
            message: data.message
        }))
    }
}

module.exports = Login;