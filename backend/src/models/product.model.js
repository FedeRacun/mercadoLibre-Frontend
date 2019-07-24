let obj = async (data,detail) => {
    return {
        'author': {
            'name': 'Federico',
            'lastname': 'Knispel',
        },
        'items': {
            'id':data.id,
            'title': data.title,
            'price': {
                'currency': data.currency_id,
                'amount': Math.round(data.price),
                'decimals': parseInt(data.price.toString().slice(-2)),
            },
            'picture': data.thumbnail,
            'condition': data.condition,
            'free_shipping': data.shipping.free_shipping,
            'sold_quantity': data.sold_quantity,
            'description': detail,
        },
    }
}


module.exports = obj;