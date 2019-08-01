let searchModel = (data) => {
    return {
        'author': {
            'name': 'Federico',
            'lastname': 'Knispel',
        },
        //la API de MeLi devuelve de > a < el numero de resultados por categoria en un Array,
        // por lo que el indice 0 es la categoria con mas productos de la busqueda
        'categories': data.filters.map(category => (category.values))[0].map(i=>i.name),
        'items': data.results.map( item => ({
                'id': item.id,
                'title': item.title,
                'price': {
                    'currency': item.currency_id,
                    'amount': Math.round(item.price),
                    'decimals': parseInt(item.price.toString().slice(-2)),
                },
                'picture': item.thumbnail,
                'condition': item.condition,
                'free_shipping': item.shipping.free_shipping
        }))
    }
}

module.exports = searchModel;