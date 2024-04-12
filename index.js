const express = require('express');
require("dotenv").config();
const routerApi = require('./routes');

const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hola mi server en Express AUTH ");
  });
  

routerApi(app);

app.listen(process.env.PORT , () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  });
  