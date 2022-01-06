const express = require("express");
const  mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const a="4.5"


//connection à la base de données
mongoose.connect(process.env.DB_CONECTION,{})
.then(function (){
    console.log("connexion à la base de donnée établie")
}) 
.catch(e=>{
    console.log("erreur de connexion :"+e + "on passe en local :" )
    mongoose.connect(process.env.DB_TEST,{})
});

const workerRoute = require('./routes/workerRoute');
const posteRoute = require('./routes/PosteRout');
const serviceRoute = require('./routes/serviceRout');
const factureRoute = require('./routes/factureRoute');
const customerRoute = require('./routes/customerRout');
const paymentRoute = require('./routes/paymentRout');
const contratRoute= require('./routes/contratRoute');
const gererRoute=require('./routes/gererRoute');

//set Midllewares
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next)=>{
    //POUR LE MOMENT OU ON SERA SUR DES ORIGIN D'ACCES UTILISER EN FRONT
    /*const allowOrigin=["http://adresse1","http://adresse2"];

    if(req.headers['origin'] && allowOrigin.indexOf(req.headers['origin'])!=-1){
        res.header('Access-Control-Allow-Origin', req.headers['origin']);
        res.header('Access-Control-Allow-Headers', 
    "Origin, X-Requested-With, Content-Type, Authorization, auth-token");
    
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods', "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    }else{
        res.header('Access-Control-Allow-Origin', '');
    }
    next()*/


    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
    "Origin, X-Requested-With, Content-Type, Authorization, auth-token");
    
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods', "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    
    next();
    })
app.use(helmet());
// Import des routes
app.use('/api/poste', posteRoute);
app.use('/api/worker', workerRoute);
app.use('/api/service', serviceRoute);
app.use('/api/facture', factureRoute);
app.use('/api/customer', customerRoute);
app.use('/api/payment', paymentRoute);
app.use('/api/contrat',contratRoute);
app.use('/api/gerer',gererRoute);







app.get('/', (req, res)=>{
if(!req.body.sta && req.body.mon ){
    console.log("oui");
 }else{
    console.log("nonnn")
}})

//lancement
app.listen(3000, ()=> console.log("server Start"));
