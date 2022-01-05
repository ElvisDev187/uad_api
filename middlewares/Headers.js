const cors = require('cors');


const fun =  (req, res, next)=>{
    //POUR LE MOMENT OU ON SERA SUR DES ORIGIN D'ACCES UTILISER EN FRONT
    /*const allowOrigin=["http://adresse1","http://adresse2"];

    if(req.headers['origin'] && allowOrigin.indexOf(req.headers['origin'])!=-1){
        res.header('Access-Control-Allow-Origin', req.headers['origin']);
        res.header('Access-Control-Allow-Headers', 
    "Origin, X-Requested-With, Content-Type, Authorization, auth-token");
    
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods', "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    }else{
        res.header('Access-Control-Allow-Origin', '');
    }
    next()*/


    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
    "Origin, X-Requested-With, Content-Type, Authorization, auth-token");
    
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods', "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    
    next();
    };

    module.exports.header = fun();