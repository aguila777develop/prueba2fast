const {Router} = require('express');

const {
  ctokenConductorGet,
    ctokenConductorPost,
    ctokenConductorPut
} = require('../controllers/ctokenConductor');

const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
 router.get('/',ctokenConductorGet);
   router.put('/',ctokenConductorPut );
  router.post('/', ctokenConductorPost);
  


module.exports = router;