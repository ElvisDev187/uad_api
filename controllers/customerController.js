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
exports.getByIdWorker = async (req, res)=>{
    try{
        let clients=new Array();
        //on extrait les factures ayant été faites par cet employé
        const factures=await MODELS.facture.find({id_worker:req.params.id_worker});
        //on va maintenant chercher les projets faits par cet employé
        const gerers=await MODELS.gerer.find({id_chef:req.params.id_worker});
        //on cree un tableau de contrat qui contiendra les contrats extrait des projets
        let contrats=new Array();
        //on inserre les contrats dans le tableau
        for(gerer of gerers){
            const item= await MODELS.contrat.findOne({id_contrat:gerer.id_contrat}) 
            if(!contrats.includes(item)){
                contrats.push(item)
            }
        }
        //on mélange maintenant le tableau de factures à celui des contrats car les 2 ont id_client qui est ce quon veut
        factures.map((item)=>contrats.push(item));
        //on inserre maintenant les clients dans la tables clients en utilisant id_client 
        for(contrat of contrats){
            const item= await MODELS.customer.findOne({id_client:contrat.id_client})
            if(!clients.includes(item)){
                clients.push(item)
            }
        }
        res.send(clients)
     }catch(e){
        console.log(e)
        res.status(400).json("erreur:"+ e)
    }
}

