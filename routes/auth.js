const {Router} = require('express');
const { check } = require('express-validator');


const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post('/login',[
    
    check('correo', 'El correo es obligatorio21').isEmail(),
//    check('login', 'El nombre de usuario es Obligatorio').not().isEmpty(),
     
    check('clave', 'La contraseña es Obligatorio').not().isEmpty(),
    validarCampos
], login);


module.exports = router;