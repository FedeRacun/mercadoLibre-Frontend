const {Router} = require('express');
const router = Router();
const {getSearch} = require('../controllers/search.controller');
const {getProduct} = require('../controllers/product.controller');

/**
 *  En caso de que el dia de mañana se quieran utilizar otros metodos aparte
 * de get() como por ej: post() o delete() en otras rutas, voy a utilizar un enrutador
 * para que sea mas escalabre
 */

//  BUSQUEDA
router.route('/?q=:query')
    .get(getSearch)

//  PRODUCTO
router.route('/:id')
    .get(getProduct)
//  .put(updateItem) ejemplo


module.exports = router;