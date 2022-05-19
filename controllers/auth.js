const { response } = require('express');
const bcrypt = require('bcryptjs/dist/bcrypt');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async (req, res= response) => {

    const {correo, clave } = req.body;
 console.log(correo);
    try {
               console.log('entro');
        // verificar si el email existe
        const usuario = await Usuario.findOne({correo});
        // const login = await Usuario.findOne({login});
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
        // verificar saldo si es conductor
        
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
            msg:'Hable con el administrador2'
        });
    }
}


module.exports = {
    login
}