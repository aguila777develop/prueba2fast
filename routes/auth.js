const {Router} = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('login', 'El nombre de usuario es Obligatori').not().isEmpty(),
    check('clave', 'La contraseña es Obligatoria').not().isEmpty(),
    validarCampos
], login);


module.exports = router;