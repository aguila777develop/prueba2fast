const { response } = require('express');
const bcrypt = require('bcryptjs/dist/bcrypt');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async (req, res= response) => {

    const {correo,clave} = req.body;
    // const body = req.body;
    
    
    // console.log(correo);
    // console.log(login);


    try {
 
   // verificar si el email o el login existe
    //   if (correo != null) {
         
         const usuario = await Usuario.findOne({correo});
    //      }
    //  if (login!=null) {
        
        //      const usuario = await Usuario.findOne({login});
//   }
    //    console.log(usuario);
        // const tipo= Usua
        if (!usuario ) {
            return res.status(404).json({
                    msg:'Usuario y Contraseña Incorrectos -correo'
            });
            
            
        }
        //si el usuario esta activo
        if (!usuario.estado ) {
            return res.status(400).json({
                msg:'Usuario y Contraseña Incorrectos -estado:false Usuario Deshabilitado',
                
            });
        }
        //verificar la contraseña
        const validClave = bcrypt.compareSync(clave,usuario.clave);
        // const validClaveLogin = bcrypt.compareSync(clave,nameuser.clave);
        if (!validClave) {
            return res.status(400).json({
                msg:'Usuario y Contraseña Incorrectos -clave',
                
            });
        }
        // verificar saldo si es conductor
        
        //generar el JWT
        const token = await generarJWT(usuario.id);
        // const tokenLogin = await generarJWT(nameuser.id);

        
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

const renewToken = async( req, res = response) => {

     const uid = req.uid;

    // generar un nuevo JWT, generarJWT... uid...
     const token = await generarJWT( uid );

    // Obtener el usuario por el UID, Usuario.findById... 
     const usuario = await Usuario.findById( uid );

    res.json({
         ok: true,
         usuario,
         token
    });

}


module.exports = {
    login,
    renewToken
}