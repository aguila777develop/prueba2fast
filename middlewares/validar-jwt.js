const { response, request } = require('express');
const jwt= require('jsonwebtoken');

const Usuario = require('../models/usuario');

const validarJWT = async(req = request, res = response, next) => {

    //obtenemos o leer el token desde el headers
    const token = req.header('x-token');
    // console.log(token);
    if (!token) {
        return res.status(401).json({
            msg:' No hay token para realizar la operacion'
        });
    }

    try {
        // validamos el token
        var { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.uid = uid;

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        if( !usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en la BD'
            })
        }


         if( !usuario.estado ) {
             return res.status(401).json({
                 msg: 'Token no válido - usuario con estado: false'
             })
         }

        req.usuario = usuario;
        next();
    } catch (error) {
        // console.log(error);
       return res.status(401).json({
           ok:false,
            msg: 'Token no valido'
        });
    }

    // para ver sicapturamso el token
    // console.log(token);

    //next();
}


module.exports = {
    validarJWT
}