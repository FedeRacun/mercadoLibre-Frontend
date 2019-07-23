/* ============================================
                Codigo del server
    ============================================            */
    console.log('Inicio: app.js')

//  UTILIDADES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//  CONFIGURACIONES
//  creo una variable 'port' a traves de express
app.set('port',process.env.PORT);


//  MIDDLEWARES

//  Necesito importar el CORS para interactuar entre los servers
app.use(cors());
//  las respuestas de la API las voy a tratar como JSON
app.use(express.json());





// RUTAS

//  Caja de busqueda sumar luego del "?" q=:query
app.use(`/api/items?`, require('./routes/search'));

// Detalle del producto: “/items/:id”
app.use(`/api/items/:id`, require('./routes/detail'));

// Descripcion del producto: "/api/items/:id/description"
app.use(`/api/items/:id/description`, require('./routes/description'));


//exporto el app() para poder utilizarlo en el resto del server
module.exports = app;