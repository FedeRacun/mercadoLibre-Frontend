let searchModel = (data) => {

    if(data.results == '' || undefined || null){

        return {
            'author': {
                'name': 'Federico',
                'lastname': 'Knispel',
            },
            'items': 'No hay publicaciones que coincidan con tu búsqueda.',

            categories : ''
              
        }
    }

    return {
        'author': {
            'name': 'Federico',
            'lastname': 'Knispel',
        },        
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
                })),

        categories: data.filters == '' ? data.available_filters[0].values.map(
            i=>(i.name))[1] : 
            data.filters.map(category => (category.values))[0].map(i=>i.name)[0]










    }
}

module.exports = searchModel;