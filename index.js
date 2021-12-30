const express = require("express");
const  mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');
//const header = require('./middlewares/Headers');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//set Midllewares
app.use(bodyParser.json());
app.use(cors());
//app.use(header());

app.use(helmet());
// Import des routes
 require('./routes/PosteRout')(app)






app.get('/', (req, res)=>{ res.status(200).json({message : "Bienvenu sur l'api UADGest"}) })


mongoose.connect(process.env.DB_TEST, ()=> console.log("connect to bd"))



app.listen(3000, ()=> console.log("server Start"));