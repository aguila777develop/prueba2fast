const {Router} = require('express');

const { 
  creditoConductorGet,
  creditoConductorPut,
  creditoConductorPost 
  } = require('../controllers/creditoConductor');

const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
 router.get('/',creditoConductorGet );
   router.put('/:id',creditoConductorPut );
  router.post('/', creditoConductorPost);
  router.delete('/', (req, res) => {
    res.json({
        "ok": true,
        "msg": "delete Api credito Conductor"
    });
  });


module.exports = router;