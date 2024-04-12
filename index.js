const express = require('express');
require("dotenv").config();
const routerApi = require('./routes');
const connectDB = require('./database/config');

const app = express();


//Base de datos
connectDB();

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hola mi server en Express AUTH ");
  });
  

routerApi(app);

app.listen(process.env.PORT , () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  });
  