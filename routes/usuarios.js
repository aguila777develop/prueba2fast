const {Router} = require('express');

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
 router.put('/:id', usuariosPut);
 router.post('/',usuariosPost );
 router.delete('/', usuariosDelete);
 router.patch('/', usuariosPatch);


module.exports = router;