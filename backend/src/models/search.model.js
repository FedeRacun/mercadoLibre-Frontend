let searchModel = (data) => {
    return {
        'author': {
            'name': 'Federico',
            'lastname': 'Knispel',
        },
        'categories': data.filters,
        //utilizo un .map() para iterar entre todos los resultados
        'items': data.results.map((item) => {
            return {
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
            };
        })
    }
}

module.exports = searchModel;