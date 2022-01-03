const express = require("express");
const  mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');
//const header = require('./middlewares/Headers');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//connection à la base de données
mongoose.connect(process.env.DB_TEST,{})
.then(function (){
    console.log("connexion à la base de donnée établie")
})
.catch(e=>{
    console.log("erreur de connexion :"+e )
    console.log("erreur de connexion :"+e + "on passe en local :" )
    mongoose.connect(process.env.DB_TEST,{})
});

const workerRoute = require('./routes/worker');
const posteRoute = require('./routes/PosteRout');
const serviceRoute = require('./routes/serviceRout');
const factureRoute = require('./routes/facture');
const customerRoute = require('./routes/customerRout');


//set Midllewares
app.use(bodyParser.json());
app.use(cors());
//app.use(header());
app.use(helmet());
// Import des routes
app.use('/api/poste', posteRoute);
app.use('/api/worker', workerRoute);
app.use('/api/service', serviceRoute);
app.use('/api/facture', factureRoute);
app.use('/api/customer', customerRoute);







app.get('/', (req, res)=>{ res.status(200).json({message : "Bienvenu sur l'api UADGest"}) })

//lancement
app.listen(3000, ()=> console.log("server Start"));
