const {Router} = require('express');

const {
  cServicioGet,
  cServicioPost,
  cServicioPut
} = require('../controllers/cServicio');

const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
 router.get('/',cServicioGet );
   router.put('/',cServicioPut );
  router.post('/', cServicioPost);
  


module.exports = router;