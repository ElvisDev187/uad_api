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
mongoose.connect(process.env.DB_CONECTION,{})
.then(function (){
    console.log("connexion à la base de donnée établie")
})
.catch(e=>{
    console.log("erreur de connexion :"+e )
})

// Import des routes
const postesRout = require('./routes/PosteRout');
app.use("/api/worker",require("./routes/worker"));





//set Midllewares
app.use(bodyParser.json());
app.use(cors());
//app.use(header());

app.use(helmet());
// Import des routes
 require('./routes/PosteRout')(app)







app.get('/', (req, res)=>{ res.status(200).json({message : "Bienvenu sur l'api UADGest"}) })

//lancement
app.listen(3000, ()=> console.log("server Start"));