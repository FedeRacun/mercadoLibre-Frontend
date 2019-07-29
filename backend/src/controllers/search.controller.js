console.log('Cargo: search.controller.js');
const fetch = require('node-fetch');
const searchModel = require('../models/search.model')
//  creo un objeto al que le voy a cargar las distintas propiedades
const searchCtrl = {};

//  cargo la propiedad getSearch al objeto controller que luego voy a exportar
searchCtrl.getSearch =
// hago una funcion asincrona para evitar errores y callbacks
    async (req, res) => {
        //obtengo los parametros de la url
        let query = req.params.query;
        //aplico los parametros obtenidos a la url de mercado libre
        let baseURL = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
        //espero a la respuesta de la api y los guardo en un json llamado data
        try {
            let response = await fetch(baseURL);
            let data = await response.json();
            res.json(
                //llamo a la funcion searchModel que se encarga de modelar toda la data
                await searchModel(data)
            )
        } catch (error) {
            console.log(error)
        }
    }


module.exports = searchCtrl;