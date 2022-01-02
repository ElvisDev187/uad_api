
const controller = require('../controllers/PosteController');


module.exports = function(app) {
    //creer un poste je dois ajouter if exist ici
    app.post('/poste/register', controller.create 
    );



app.get('/poste/:postName', controller.getByName);

app.get('/poste/:postId', controller.getById);


app.delete('/poste/:postId', controller.delete);


app.patch('/poste/:postId', controller.update )

app.get('/poste', controller.getAll);
}


// // lister les postes

// router.get('/', async(req, res)=>{
//     try {
//         const postes = await Poste.find();
//         res.status(200).send(postes);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // chercher un post en particulier par son nom
// router.get('/:postName', async(req, res)=>{
//     try {
//         const poste = await Poste.findOne({nom_poste: req.params.postName});
//         res.status(200).send(poste);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });


// // chercher un post en particulier par son Id
// router.get('/:postId', async(req, res)=>{
//     try {
//         const poste = await Poste.findOne({id_poste: req.params.postId});
//         res.status(200).send(poste);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });




// // supprimer un poste specifique
// router.delete('/:postId', async(req, res)=>{

//     try {
//         const Removepost = await Poste.remove({ id_poste: req.params.postId})
//         res.status(200).send(Removepost)
//     } catch (error) {
//        res.status(400).send({message: error})
//     }
   
//    })

//    // update un poste
// router.patch('/:postId', async(req, res)=>{

//     // validation
//     const {error} =  posteValidation(req.body);
//     if(error) return res.status(400).send(error.details[0].message);

//     const poste = new Poste({
//         id_poste: req.body.id,
//         nom_poste: req.body.name,
//         salaire: req.body.salaire,
//         grade: req.body.grade
//     });

//     try {
//         const Updateposte = await Poste.updateOne({ id_poste: req.params.postId}, 
//             {$set: poste})
//         res.status(200).send(Updateposte)
//     } catch (error) {
//        res.status(400).send({message: error})
//     }
   
//    });

// module.exports = router