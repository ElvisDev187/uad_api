const jwt=require("jsonwebtoken");

module.export=function(req,res,next){
    const token=req.header('auth-token');
    if(!token) return res.status(401).json("Accès Refusé")
    try{
        const contenue=jwt.verify(token,process.env.TOKEN_KEY);
        req.worker=contenue;
        next();
    }catch(e){
        console.log(e.message)
        res.status(400).json('token incorrect')
    }
}