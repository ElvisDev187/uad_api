
exports.worker= (req,res,next)=>{
    const grade=req.worker.grade
    if(grade>100){
        next();
    }else if((grade<17 && grade>10)||(grade<67 && grade>60)){
        console.log(grade)
        next();
    }else{
        res.status(400).json("votre acréditation ne vous permet pas de consulter ou\n d'alterer les informations des employés")
    }
}

exports.client=(req,res,next)=>{
    const grade=req.worker.grade
    if(grade>100){
        next();
    }else if((grade<27 && grade>20)||(grade<77 && grade>70)){
        next();
    }else{
        res.status(400).json("votre acréditation ne vous permet pas de consulter ou\n d'alterer les informations de la clientèle")
    }
}
exports.poste=(req,res,next)=>{
    const grade=req.worker.grade
    if(grade>100){
        next();
    }else if((grade<37 && grade>30)||(grade<67 && grade>60)){
        next();
    }else{
        res.status(400).json("votre acréditation ne vous permet pas de consulter ou\n d'alterer les informations des postes(roles)")
    }
 
}

exports.contrat=(req,res,next)=>{
    const grade=req.worker.grade
    if(grade>100){
        next();
    }else if((grade<47 && grade>40)||(grade<77 && grade>70)){
        next();
    }else{
        res.status(400).json("votre acréditation ne vous permet pas de consulter ou\n d'alterer les informations des contrats")
    }
 
}

exports.facture=(req,res,next)=>{
    const grade=req.worker.grade
    if(grade>100){
        next();
    }else if(grade<57 && grade>50){
        next();
    }else{
        res.status(400).json("votre acréditation ne vous permet pas de consulter ou\n d'alterer les informations des factures")
    }
 
}