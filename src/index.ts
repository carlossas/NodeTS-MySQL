import Server from "./server/server";
import _mysql from './router/mysql';

/*
=======================================================================
<!-- Inicializar variables  -->
=======================================================================
*/

//BODYPARSE
var bodyParser = require('body-parser');

//INICIAMOS EL SERVER EN EL PUERTO 3000
const server = Server.init(3000);

/*
=======================================================================
<!-- Fin de inicio de variables  -->
=======================================================================
*/


/*
=======================================================================
<!-- Inicio rutas del servidor  -->
=======================================================================
*/
    
//---------/mysql
server.app.use( _mysql );

/*
=======================================================================
<!-- Fin de rutas del servidor  -->
=======================================================================
*/



/*
=======================================================================
<!-- Inicia el parseo el form-urlencoded  -->
=======================================================================
*/

server.app.use(bodyParser.urlencoded({ extended: false }))
server.app.use(bodyParser.json())

/*
=======================================================================
<!-- Fin del parseo form-urlencoded  -->
=======================================================================
*/



/*
=======================================================================
<!-- Inicio del lanzamiento servidor  -->
=======================================================================
*/

server.start( ()=>{
    console.log("Servidor corriendo en el puerto 3000");
});

/*
=======================================================================
<!-- Fin del lanzamiento servidor  -->
=======================================================================
*/


