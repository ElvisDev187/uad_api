const {MODELS} = require('../models/index')
const Poste = MODELS.poste

exports.create = (req, res)=>{
    console.log(res.locals.poste);
    const poste = new Poste(res.locals.poste);

     
    const err =  poste.validateSync();
    // message d'erreur personaliser
   // poste.invalidate('salaire', " le salaire doit etre superieur au smic 36776")
    if(err) {return res.status(400).json(err.message) }

         poste.save().then((result)=>{
            res.status(200).json({message : 'Poste créé avec success', result: result});
        }).catch((err)=>{
            res.status(400).json({message : 'Une errur est survenue', error: err});
        })  
};

exports.getAll = (req, res)=>{
    // console.log(req.route.path);
    //  let post = (req.route.path.indexOf("poste")? true : false)
    //  console.log(post);
    // if(post){ console.log("ca concerne poste")};
     Poste.find().then((result)=>{
          res.status(200).json({data: result});
     }).catch((err)=>{
        res.status(400).json({message: "Une erreur s'est produite", error: err});
     })
               
};  

exports.getByName = (req, res) =>{
         console.log('getByname : ',req.params);
         Poste.findOne({nom_poste: req.params.postName}).then((result)=>{
              res.status(200).json({data: result});
         }).catch((err)=>{
            res.status(400).json({message: "Une erreur s'est produite", error: err});
         })
       
   
};

exports.getById = (req, res)=>{
   
    Poste.findOne({id_poste: req.params.postId}).then((result)=>{
        res.status(200).json({data: result});
    }).catch((err)=>{
        res.status(400).json({message: "Une erreur s'est produite", error: err});
    })
                
           
}

exports.delete = (req, res)=>{
         Poste.deleteOne({ id_poste: req.params.postId}).then((result)=>{
              res.status(200).json({message: "poste supprimer avec success"});
              console.log(result);
         }).catch((err) =>{
            res.status(400).json({message: "Une erreur s'est produite", error: err});
         })
   
}

exports.update = (req, res)=>{

      
    const poste = new Poste(res.locals.poste);
        
           
             Poste.updateOne({ id_poste: req.params.postId}, 
                    {$set: poste}).then((result)=>{
                        res.status(200).json({message: "Poste mis a jour"});
                        console.log(result);
                    }).catch((err)=>{
                        res.status(400).json({message: "Une erreur s'est produite", error: err});
                    })
              
           
}
