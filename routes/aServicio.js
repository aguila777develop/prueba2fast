const {Router} = require('express');

const router = Router();

 // codigo con respuesta en codigos
//  router.get('/api/error', (req, res) => {
//     res.status(403).json({
//         "ok": true,
//         "msg": "get Api"
//     });
//   });
 router.get('/', (req, res) => {
     res.json({
         "ok": true,
         "msg": "get Api cServicio"
     });
   });
   router.put('/', (req, res) => {
    res.json({
        "ok": true,
        "msg": "put Api cServicio"
    });
  });
  router.post('/', (req, res) => {
    res.json({
        "ok": true,
        "msg": "post Api cServicio"
    });
  });
  router.delete('/', (req, res) => {
    res.json({
        "ok": true,
        "msg": "delete Api cServicio"
    });
  });


module.exports = router;