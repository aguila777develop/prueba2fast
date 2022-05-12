const {Router} = require('express');

const { 
  cCostoGet,
    cCostoPut
} = require('../controllers/cCosto');

const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
 router.get('/', cCostoGet);
   router.put('/',cCostoPut );
 


module.exports = router;