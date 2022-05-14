const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

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
 router.get('/', usuariosGet);
 router.put('/:id', [
         check('id', 'No es ID valido').isMongoId(),
         check('id').custom(existeUsuarioPorId),
        validarCampos
 ], usuariosPut);
 
 router.post('/',[
         check('nombre','El Nombre es Obligatorio.').not().isEmpty(),
         check('clave','La clave de ser mas de 6 caracteres.').isLength({min:6}),
         check('correo').custom(emailExiste),
         check('departamento','No es un tipo de departamento valido').isIn([1,2,3,4,5,6,7,8,9]),
         check('ciudad','No es un tipo de ciudad valido').isIn(['La Paz','Cochabamba','Santa Cruz de la Sierra','Beni','Pando','Tarija','Oruro','Chuquisaca','Potosi']),
         check('expedido','No es un tipo expedido valido').isIn(['LPZ','CBA','SCZ','BEN','PAN','TJA','CHQ','ORU','PTS']),
         check('sexo','No es un tipo sexo valido').isIn(['F','M']),
         check('detalle.*.documento','No es base64').isBase64(),
         validarCampos
        ],usuariosPost );
 router.delete('/:id',[
        check('id', 'No es ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
       validarCampos
 ], usuariosDelete);
 router.patch('/', usuariosPatch);


module.exports = router;