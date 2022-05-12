const {Router} = require('express');

const {
    calificaClienteGet,
    calificaClientePost,
    calificaClientePut
 } = require('../controllers/calificaCliente');

const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
 router.get('/', calificaClienteGet);
 router.post('/', calificaClientePost);
 router.put('/', calificaClientePut);
 


module.exports = router;