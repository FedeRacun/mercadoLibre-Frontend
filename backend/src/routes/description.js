const {Router} = require('express');
const router = Router();

router.route('/')
    .get((req, res) => {
        res.send('https://api.mercadolibre.com/items/:${id}/${description}');
    })

module.exports = router;