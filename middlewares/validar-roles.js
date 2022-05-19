const { response } = require("express");



const esAdminRole = (req, res= response, next) =>{
    if (!req.usuario) {
        return res.status(500).json({
            msg:'Se quiere verificar el rol sin validar el token primero'
        });
    }

    const { rol, nombre } = req.usuario;

    if (rol!=='ADMIN_ROLE') {
        return res.status(401).json({
            msg: ` ${ nombre } no es Administrador - permiso denegado para realizar esta operación`
        });
    }
 
    next();
}

const tieneRole = ( ...roles  ) => {
    return (req, res = response, next) => {
        console.log(roles);    
         if ( !req.usuario ) {
             return res.status(500).json({
                 msg: 'Se quiere verificar el role sin validar el token primero'
             });
         }else if ( roles.includes( req.usuario.rol ) ) {
             console.log('entro');
             return res.status(401).json({
                 msg: `El servicio requiere uno de estos roles ${ roles }`
             });
         }
 
 
        next();
    }
}

module.exports ={
    esAdminRole,
    tieneRole
}