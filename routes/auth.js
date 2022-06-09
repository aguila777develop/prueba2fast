const {Router} = require('express');
const { check } = require('express-validator');


const { login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.post('/login',[
    
    //check('correo', 'El correo es obligatorio21').isEmail(),
    // check('correo', 'El correo es obligatorio21').isEmail(),
//    check('login', 'El nombre de usuario es Obligatorio').not().isEmpty(),
     
    check('clave', 'La contraseña es Obligatorio').not().isEmpty(),
    validarCampos
], login);

router.get('/renew', validarJWT, renewToken);

module.exports = router;