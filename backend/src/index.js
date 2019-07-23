/* ============================================
                Inicio del server
    ============================================            */
//Orquesto todo lo que necesito para trabajar
require('./config/config');
const app = require('./app');

//levanto el servidor en una funcion asincrona para prevenir posibles errores y evitar callbacks
async function main() {

    //iniciar el server en un puerto
    await app.listen(app.get('port'));
    console.log('Server iniciado en el puerto: ', app.get('port'))


}

main();