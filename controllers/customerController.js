const {MODELS} = require('../models/index')
exports.create = async (req, res) =>{
    const customer = new MODELS.customer(req.body);
    
    const err = customer.validateSync();
    if(err) return res.status(400).json(err.message)

    const exist = await MODELS.customer.findOne({id_client: req.body.id_client});
    if(exist) return res.status(400).json("le client existe déjà");

    try {
        const saveCustomer = await customer.save();
        res
        .status(200)
        .json({ message: "Client créé avec success", result: saveCustomer })
    } catch (error) {
        res.status(400).json({ message: "Une errur est survenue", error: error.message })
    }
}

exports.getAll = async(req, res)=>{
    try {
        const customers = await MODELS.customer.find();
        res.status(200).json(customers)
    } catch (error) {
        res.status(400).json({ message: "Une errur est survenue", error: error.message })
    }
}

exports.getSpecific = async (req, res)=>{
    try{
        const customer= await MODELS.customer.find(req.body)
        res.send(customer)
     }catch(e){
        console.log(e)
        res.status(400).json("erreur:"+ e)
    }
}