const {Router} = require('express');

const {
  ctokenServicioGet,
    ctokenServicioPut
}= require('../controllers/ctokenServicio');

const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
 router.get('/', ctokenServicioGet);
   router.put('/',ctokenServicioPut );
  
 


module.exports = router;