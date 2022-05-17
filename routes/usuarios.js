const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');




const { emailExiste, existeUsuarioPorId, esRolValido, existeLogin } = require('../helpers/db-validators');

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
         // Validacion de rol contra la BD
         check('rol').custom(esRolValido),
        validarCampos
 ], usuariosPut);
 // ************************************************************




// ********************** POST *************************************
 router.post('/',[
         check('nombre','El Nombre es Obligatorio.').not().isEmpty(),
         check('clave','La clave de ser mas de 6 caracteres.').isLength({min:6}),
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
         check('departamento','No es un tipo de departamento valido').isIn([1,2,3,4,5,6,7,8,9]),
         check('tipo','No es un tipo de formato valido').isIn(['U','C']),
         check('ciudad','No es un tipo de ciudad valido').isIn(['La Paz','Cochabamba','Santa Cruz de la Sierra','Beni','Pando','Tarija','Oruro','Chuquisaca','Potosi']),
         check('expedido','No es un tipo expedido valido').isIn(['LPZ','CBA','SCZ','BEN','PAN','TJA','CHQ','ORU','PTS']),
         check('sexo','No es un tipo sexo valido y es obligatorio').isIn(['F','M']),
        //  check('detalle.*.tipodoc','El tipo de Documento es Obligatorio').not().isEmpty(),
        //  check('detalle.*.nombreDoc','El Nombre  ddel Documento es Obligatorio').not().isEmpty(),
        //  check('detalle.*.documento','No està en formato de base64 es obligatorio').isBase64(),
         validarCampos
        ],usuariosPost );
// **********************************************************************
 




 // ********************** DELETE  **************************************
        router.delete('/:id',[
         validarJWT,
        check('id', 'No es ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
       validarCampos
 ], usuariosDelete);
 // ***********************************************************************
 
 
 
 
 
 router.patch('/', usuariosPatch);


module.exports = router;