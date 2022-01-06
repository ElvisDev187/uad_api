const {MODELS} = require('../models/index');

exports.create = async(req, res) =>{ 
  const payment = new MODELS.payment(req.body);

  const err = payment.validateSync();
  if(err){ 
    console.log(err.message);
    return res.status(400).json("Veuillez verifié votre saisie")}

    const exist = await MODELS.payment.findOne({id_payment: req.body.id_payment});
    if (exist) {
      return res.status(400).json("Ce paiement existe déjà");
    }

    try {
      const savePayment = await payment.save();
      console.log(savePayment);
      res.status(200).json("Paiement enregistré !!");
    } catch (error) {
      console.log(error);
      res.status(400).json("une erreur est survenu lors de l'enregistrement du paiement")
    }


}


exports.getAll = async (req, res)=>{

  try{
    const result=await MODELS.payment.find()
    res.status(200).json(result)

}catch(e){
  console.log(e);
    res.status(400).json("erreur de connexion")
}
}

exports.getSpecific = async (req, res)=>{

      try{
          const result=await MODELS.payment.find(req.body)
          res.status(200).json(result)
    }catch(e){
        console.log(e);
        res.status(400).json("erreur de connexion")
    }

}