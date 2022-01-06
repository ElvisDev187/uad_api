
exports.worker= (req,res,next)=>{
    const grade=req.worker.grade
    if(grade<17 && grade>10){
        console.log(grade)
        next();
    }else{
        res.status(400).json("votre acréditation ne vous permet pas de consulter ou\n d'alterer les informations des employés")
    }
}

exports.client=(req,res,next)=>{
    const grade=req.worker.grade
    if(grade<27 && grade>20){
        next();
    }else{
        res.status(400).json("votre acréditation ne vous permet pas de consulter ou\n d'alterer les informations de la clientèle")
    }
}

