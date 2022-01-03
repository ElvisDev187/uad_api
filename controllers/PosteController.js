const { MODELS } = require("../models/index");
const Poste = MODELS.poste;

exports.create = async(req, res) => {
  const poste = new Poste({
    id_poste: req.body.id_poste,
    nom_poste: req.body.nom_poste,
    salaire: req.body.salaire,
    grade: req.body.grade,
  });

  const err = poste.validateSync();
  if (err) {
    return res.status(400).json(err.message);
  }

  const postExist = await Poste.findOne({ id_poste: req.body.id_poste });
  if (postExist) return res.status(400).json("Le poste existe déja");

  poste
    .save()
    .then((result) => {
      res
        .status(200)
        .json({ message: "Poste créé avec success", result: result });
    })
    .catch((err) => {
      res.status(400).json({ message: "Une errur est survenue", error: err });
    });
};

exports.getAll = (req, res) => {
  Poste.find()
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Une erreur s'est produite", error: err });
    });
};

exports.getByName = (req, res) => {
  console.log("getByname : ", req.params);
  Poste.findOne({ nom_poste: req.params.postName })
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Une erreur s'est produite", error: err });
    });
};

exports.getById = (req, res) => {
  Poste.findOne({ id_poste: req.params.postId })
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Une erreur s'est produite", error: err });
    });
};

exports.delete =async (req, res) => {
   await Poste.deleteOne({ id_poste: req.params.postId })
    .then((result) => {
      res.status(200).json({ message: "poste supprimer avec success" });
      console.log(result);
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Une erreur s'est produite", error: err });
    });
};

exports.update =async (req, res) => {
  const poste = new Poste({
    id_poste: req.params.postId,
    nom_poste: req.body.nom_poste,
    salaire: req.body.salaire,
    grade: req.body.grade,
  });
  const err = poste.validateSync();
  if (err) {
    return res.status(400).json(err.message);
  }

  const postExist = await Poste.findOne({ id_poste: req.params.postId });
  if (!postExist) return res.status(400).json("Le poste n'existe pas");

  Poste.updateOne({ id_poste: req.params.postId }, { $set: poste })
    .then((result) => {
      res.status(200).json({ message: "Poste mis a jour" });
      
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Une erreur s'est produite", error: err });
    });
};
