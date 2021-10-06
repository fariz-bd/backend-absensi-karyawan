const jwt = require('./token');

class Aut{
    static data(req, res, next){
        let header = req.header('Authorization')
        if (!header){
            res.json({
                message: `Please login`
            })
        }else{
            let tokens = header.split(' ')[1]
            jwt.verify(tokens)
            .then(data => {
                req.data = data,
                next()
            }).catch(data => res.json({
                message: `Please login!.`,
                data: []
            }))
        } 
    }

    static manager(req, res, next){
        let header = req.header('Authorization')
        if (!header){
            res.json({
                message: `Please login`
            })
        }else{
            let tokens = header.split(' ')[1]
            jwt.verify(tokens)
            .then(data => {
                if(data.jabatan == 'manager'){
                    req.data = data;
                    next();
                }else{
                    res.json({message: `can't access this data!.`});
                }
            }).catch(data => res.json({
                message: `Please login!.`,
                data: []
            }))
        } 
    }

    static spv(req, res, next){
        let header = req.header('Authorization')
        if (!header){
            res.json({
                message: `Please login`
            })
        }else{
            let tokens = header.split(' ')[1]
            jwt.verify(tokens)
            .then(data => {
                if(data.jabatan == 'supervisor'){
                    req.data = data;
                    next();
                }else{
                    res.json({message: `can't access this data!.`});
                }
            }).catch(data => res.json({
                message: `Please login!.`,
                data: []
            }))
        } 
    }
}

module.exports = Aut;