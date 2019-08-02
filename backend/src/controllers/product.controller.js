const fetch = require('node-fetch');
const productModel = require('../models/product.model');
//  creo un objeto al que le voy a cargar las distintas propiedades
const productCtrl = {};

//  cargo la propiedad getProduct al objeto controller que luego voy a exportar
productCtrl.getProduct =
    async (req, res) => {
        //obtengo los parametros de la url
        let id = req.params.id;
        //aplico los parametros obtenidos a la url de mercado libre
        let baseURL = `https://api.mercadolibre.com/items/${id}`;
        //espero a la respuesta de la api y los guardo en un json
        try {
            let response = await fetch(baseURL);
            let data = await response.json();
            let detail =await getDetail(id)
            res.json(
                productModel(data,detail)
            )
        } catch (error) {
            console.log(error);
        }


    };

 async function getDetail(id){
    //aplico los parametros obtenidos a la url de mercado libre
    let baseURL = `https://api.mercadolibre.com/items/${id}/description`;
    //espero a la respuesta de la api y los guardo en un json
    let response = await fetch(baseURL);
    let data = await response.json();
    return data.plain_text;
}

module.exports = productCtrl;