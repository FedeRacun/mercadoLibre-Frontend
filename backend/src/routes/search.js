const {Router} = require('express');
const router = Router();

//  Utilizo enrutadores por si el dia de mañana deciden agregarse nuevos metodos en la api

/**
 *  CAPITULO 5 STACK MERN 
 */
router.route('/')
    .get((req, res) => {
        res.send('https://api.mercadolibre.com/sites/MLA/search?q=:${query}');
    });
    //.post()
    //.put()

module.exports = router;