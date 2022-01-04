const { Mongoose } = require('mongoose');
const {MODELS} = require('../models/index')

exports.create = async (req, res)=>{
  
    const service = new MODELS.Service({
        id_service: req.body.id,
        libelle: req.body.libelle,
        description: req.body.description,
        tarif_base:req.body.tarif,
        type: req.body.type
    });

    const err = service.validateSync();
    if(err) return res.status(400).json(err.message);

    const exist = await MODELS.Service.findOne({id_service: req.body.id});
    if(exist) return res.status(400).json("le service existe déjà");

     
    try {
        const savedService = await service.save();
        res
        .status(200)
        .json({ message: "Service créé avec success", result: savedService })
        
    } catch (error) {
        res.status(400).json({ message: "Une errur est survenue", error: error.message })
    }
}

exports.getAll = async (req, res)=>{

    try {
        const services = await MODELS.Service.find();
        res.status(200).json(services)
    } catch (error) {
        res.status(400).json({ message: "Une errur est survenue", error: error.message })
    }

}

exports.delete = async (req, res) =>{


    try {
        const msg = await MODELS.Service.deleteOne({id_service: req.params.serviceId});
        res.status(200).json(msg)
    } catch (error) {
        res.status(400).json({ message: "Une errur est survenue", error: error.message })
    }
}

exports.update =  async(req, res)=>{
    const uPoste = new MODELS.Service({
        id_service: req.params.serviceId,
        libelle: req.body.libelle,
        description: req.body.description,
        tarif_base:req.body.tarif_base,
        type: req.body.type
    });
    const err = uPoste.validateSync();
    if(err) return res.status(400).json(err.message);

    const exist = await MODELS.Service.findOne({id_service: req.params.serviceId});
    if(!exist) return res.status(400).json("Le service n'existe pas");

    try {
        const result = await MODELS.Service.updateMany({id_service: req.params.serviceId}, { $set: req.body }, {new: true});
        res.status(200).json("Service mis à jour");
    } catch (error) {
        res.status(400).json({ message: "Une errur est survenue", error: error.message })   
    }

}

exports.getSpecific = async (req, res)=>{

    try {
        const service = await MODELS.Service.find(req.body);
        res.status(200).json(service)
    } catch (error) {
        res.status(400).json({ message: "Une errur est survenue", error: error.message })
    }

}