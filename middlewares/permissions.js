

exports.facture=(req,res,next)=>{
    const grade=(req.worker.grade)%10;
    if(grade!=parseInt(grade) && (grade%0.5)==0.25){
        console.log(grade)
        next();
    }else{
        res.status(400).json("votre acréditation ne vous permet pas d'utiliser le service de vente")
    }
}

exports.contrat=(req,res,next)=>{
    //verifie d'abord si la requete de creation concerne
    // les contrats proprement dit ou alors la 2eme fonction de la table
if(!req.body.statut && req.body.montant){
    //si la requete concernait la 2eme fonction de la table on laisse passé sans verification
     next();
}else{
    const grade=(req.worker.grade)%10;
    console.log(req.worker.grade)
    console.log(grade)
    const service=req.body.id_service

    switch (parseInt(service)) {
        case 1:
            //la representation marketing dont le droit est 0.5
            if(grade!=parseInt(grade)){
                if((grade%1)-0.5>=0) next()
            }else{
                res.status(400).json("votre acréditation ne vous permet pas de creer un contrat de representation marketing")
            }
            
          break;
        case 2:
            //l'assistance conseil dont le droit est 1
            if(parseInt(grade)==1 || parseInt(grade)==3 || parseInt(grade)==4|| parseInt(grade)==6){
                next();
            }else{
                res.status(400).json("votre acréditation ne vous permet pas de creer un contrat d'assistance conseil")
            }
            
            break;
        case 3:
            //le coaching dont le droit est 2
            if(parseInt(grade)==3 || parseInt(grade)==2 || parseInt(grade)==5|| parseInt(grade)==6){
                next();
            }else{
                res.status(400).json("votre acréditation ne vous permet pas de creer un contrat de coaching")
            }
            
          break;
        case 4:
            //la prestation de service dont le droit est 3

            if(parseInt(grade)==3 || parseInt(grade)==4 || parseInt(grade)==6){
                next();
            }else{
                res.status(400).json("votre acréditation ne vous permet pas de creer un contrat de prestation de service")
            }
            
            break;
        default:
          res.status(200).json(`vous n'avez pas selectionné un service valide`);
      }
}

}