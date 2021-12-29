const express = require("express");
const  mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


// Import des routes
const postesRout = require('./routes/PosteRout');





//set Midllewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use('/api/poste', postesRout);


mongoose.connect(process.env.DB_CONECTION, ()=> console.log("connect to bd"))



app.listen(3000, ()=> console.log("server Start"));