const {Router} = require('express');
const router = Router();

router.route('/')
    .get((req, res) => {
        res.send('https://api.mercadolibre.com/items/:${id}');
    })

module.exports = router;