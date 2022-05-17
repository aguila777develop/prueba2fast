const bcrypt = require('bcryptjs/dist/bcrypt');
const { response } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const Usuario = require('../models/usuario');


const login = async (req, res= response) => {

    const {correo, login, clave } = req.body;

    try {
        // probable solucion con 2 consultas
        // const [ total, usuarios ] = await Promise.all([
        //     Usuario.countDocuments(query),
        //     Usuario.find(query)
        //         .skip( Number( desde ) )
        //         .limit(Number( limite ))
        // ]);
    
        
        // verificar si el email existe
        const usuario = await Usuario.findOne({correo});
        // const nameuser = await Usuario.findOne({login});
        // const tipo= Usua
        if (!usuario) {
            return res.status(400).json({
                msg:'Usuario y Contraseña Incorrectos -correo'
            });
        }
        //si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg:'Usuario y Contraseña Incorrectos -estado:false',
                
            });
        }
        //verificar la contraseña
        const validClave = bcrypt.compareSync(clave,usuario.clave);
        if (!validClave) {
            return res.status(400).json({
                msg:'Usuario y Contraseña Incorrectos -clave',
                
            });
        }
        //generar el JWT
        const token = await generarJWT(usuario.id);



        res.json({
            // msg:"Login Ok",
            // correo,
            // login,
            // clave,
            // msg:"********",
            usuario,
            token
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Hable con el administrador'
        });
    }
}


module.exports = {
    login
}