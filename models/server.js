const express = require('express')
const cors = require('cors');



class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Rutas
        this.usuariosPath = '/api/usuarios';
        this.posicionConductorPath = '/api/posicionConductor';
        this.creditoConductorPath= '/api/creditoConductor';
        this.cCostoPath= '/api/cCosto';
        this.calificaClientePath= '/api/calificaCliente';
        this.ctokenConductorPath= '/api/ctokenConductor';
        this.ctokenServicioPath= '/api/ctokenServicio';
        this.cServicioPath= '/api/cServicio';


        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        //CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    //    this.app.use('/api/ausuario', require('../routes/driver'));
       this.app.use(this.ctokenConductorPath, require('../routes/ctokenConductor'));
       this.app.use(this.ctokenServicioPath, require('../routes/ctokenServicio'));
       this.app.use(this.cServicioPath, require('../routes/cServicio'));
       this.app.use(this.cCostoPath, require('../routes/cCosto'));
       this.app.use(this.posicionConductorPath, require('../routes/posicionConductor'));
       this.app.use('/api/aservicio', require('../routes/aServicio'));
       this.app.use('/api/mservicio', require('../routes/mservicio'));
       this.app.use(this.calificaClientePath, require('../routes/calificaCliente'));
       this.app.use(this.creditoConductorPath, require('../routes/creditoConductor'));
    }

    // puerto
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor correindo en puerto', this.port);
        });
    }

}


module.exports = Server;