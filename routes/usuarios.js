const {Router} = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole, tieneRole } = require('../middlewares/validar-roles');




const { emailExiste, existeUsuarioPorId, esRolValido, existeLogin} = require('../helpers/db-validators');

const { usuariosGet, 
        usuariosPut,
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch} = require('../controllers/usuarios');



const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
// ******************** GET  **********************************
 router.get('/', usuariosGet);
// ************************************************************




// ******************* PUT  ***********************************
 router.put('/:id', [
         check('id', 'No es ID valido').isMongoId(),
         check('id').custom(existeUsuarioPorId),
         check('login').custom(existeLogin),
         check('clave','La clave debe de ser de 8 o màs caracteres.').isLength({min:8}),
         // Validacion de rol contra la BD
         check('rol').custom(esRolValido),
        validarCampos
 ], usuariosPut);
 // ************************************************************




// ********************** POST *************************************
 router.post('/',[
         check('nombre','El Nombre es Obligatorio.').not().isEmpty(),
         check('clave','La clave de ser 6 o màs caracteres.').isLength({min:6}),
         check('correo','El correo no es valido').isEmail(),
         check('correo').custom(emailExiste),
         // Valkidacion de rol con un String ADMIN_ROLE','USER_ROLE', 'DRIVER_ROLE
         //  check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE', 'DRIVER_ROLE']),
         
         // Validacion de rol contra la BD
         check('rol').custom(esRolValido),
         
         check('fecNacimiento','La fecha de Nacimiento es Obligatorio.').not().isEmpty(),
         check('telefono','El Numero de telefono es Obligatorio.').not().isEmpty(),
         check('login','El Nombre de usuario es Obligatorio.').not().isEmpty(),
        check('login').custom(existeLogin),
        //  check('nacionalidad','La Nacionalidad es Obligatorio.').not().isEmpty(),
         check('departamento','No es un tipo de departamento valido, Departamentos validos 1=La Paz, 2= Cochabamba, etc.').isIn([1,2,3,4,5,6,7,8,9]),
         check('tipo','No es un tipo de formato valido, Formato valido U=Usuario,C=Conductor').isIn(['U','C']),
         check('ciudad','No es un tipo de ciudad valido, Ciudades validas, La Paz, Cochabamba, etc').isIn(['La Paz','Cochabamba','Santa Cruz de la Sierra','Beni','Pando','Tarija','Oruro','Chuquisaca','Potosi']),
         check('expedido','No es un tipo expedido valido, tipos validos LPZ, CBA, SCZ, etc.').isIn(['LPZ','CBA','SCZ','BEN','PAN','TJA','CHQ','ORU','PTS']),
         check('sexo','No es un tipo sexo valido, tipo de sexo validos F= Femenino, M= Masculino').isIn(['F','M']),
         check('detalle.*.tipodoc','El tipo de Documento es Obligatorio, Documentos validos 1=Certificado de Nacimiento 2=Carnet de Identidad 3=Certificado de Antecedentes Penales 4=Licencia de Conducir, etc.').isIn([1,2,3,4,5,6,7,8,9]),
         check('detalle.*.nombreDoc','El Nombre  ddel Documento es Obligatorio').not().isEmpty(),
         check('detalle.*.documento','No està en formato de base64 es obligatorio el formato base64').isBase64(),
         validarCampos
        ],usuariosPost );
// **********************************************************************
 




 // ********************** DELETE  **************************************
        
         router.delete('/:id', [
         validarJWT,
         esAdminRole, // este middelware forza a que se aun administrador quin borra el registro de la BD
        // tieneRole('ADMIN_ROLE','DRIVER_ROLE'),
        check('id', 'No es ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        validarCampos
  ], usuariosDelete);
 // ***********************************************************************
 
 
 
 
 
 router.patch('/', usuariosPatch);


module.exports = router;