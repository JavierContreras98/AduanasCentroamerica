const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.guatemalaPath = '/api/guatemala';
        this.costaricaPath = '/api/costarica';

        // Conectar a base de datos
        this.conectarDB();
        //CODIGO DE CAPA INTERMEDIA ---MIDDLEWARES----
        this.middlewares();
        //RUTAS DE INGRESO AL SERVIDOR
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use(this.costaricaPath, require("../routes/costarica"));
        this.app.use( this.guatemalaPath, require('../routes/guatemala'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports = Server;
