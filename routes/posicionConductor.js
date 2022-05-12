const {Router} = require('express');

const { 
  posicionConductorGet, 
  posicionConductorPut,
  posicionConductorPost } = require('../controllers/posicionConductor');

const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
 router.get('/', posicionConductorGet);
 router.put('/', posicionConductorPut);
  router.post('/', posicionConductorPost);
  

module.exports = router;