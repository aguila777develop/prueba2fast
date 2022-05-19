const { response, request } = require('express');
const jwt= require('jsonwebtoken');

const Usuario = require('../models/usuario');

const validarJWT = async(req = request, res = response, next) => {

    //obtenemos el token desde el headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg:' No hay token para realizar la operacion'
        });
    }

    try {
        // validamos el token
        const { uid } =jwt.verify(token, process.env.SECRETORPRIVATEKEY);

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
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        })
    }

    // para ver sicapturamso el token
    // console.log(token);

    next();
}


module.exports = {
    validarJWT
}