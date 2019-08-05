/* ============================================
                Codigo del server
    ============================================            */
//  UTILIDADES
const express = require('express');
const cors = require('cors');
const app = express();


//  CONFIGURACIONES
//  creo una variable 'port' a traves de express
app.set('port',process.env.PORT);


//  MIDDLEWARES
app.use(cors());
app.use(express.json());


// RUTAS
app.use(`/api/items/`, require('./routes/routes'));


//exporto el app() para poder utilizarlo en el resto del server
module.exports = app;