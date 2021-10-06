const jwt = require('jsonwebtoken');

class Token{

    static add(data){
        let promise = new Promise((resolve, reject)=>{
            jwt.sign({ id: data.id, nama: data.nama, jabatan: data.jabatan, bagianId: data.bagianId, subbagianId: data.subbagianId },'fosan', (err, data)=>{
                if(err){
                    reject('Error create token!.');
                }else{
                    resolve(data);
                }
            });
        });
        return promise;
    }

    static verify(token){
        let promise = new Promise((resolve, reject)=>{
            jwt.verify(token, 'fosan', (err, data)=>{
                if(err){
                    reject(`Silahkan Login Untuk melanjutkan`);
                }else{
                    resolve(data);
                }
            });
        });
        return promise;
    }

}

module.exports = Token