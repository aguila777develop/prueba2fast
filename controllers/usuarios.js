const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    // const query = req.query;
    // res.json({
    //     "ok": true,
    //     "msg": "get Api - usuariosGet",
    //     query
    // });
    // otra forma desestruturada
    const { q, nombre='Sin nombre', apikey} = req.query;
    res.json({
        "ok": true,
        "msg": "get Api - usuariosGet",
        q,
        nombre,
        apikey
    });
  }

  const usuariosPut = (req, res= response) => {
    const id = req.params.id;
    // sihubeira mas podriamos desustructurar como abajo
    // const {id} = req.params;
    res.json({
        "ok": true,
        "msg": "put API - usuariosPut",
        id
    });
  }

  const usuariosPost = (req, res = response) => {

    // const body = req.body;
    const {nombre, edad} = req.body;
    res.json({
        "ok": true,
        "msg": "post Api - usuariosPost",
        nombre,
        edad
        // body
    });
  }
  const usuariosDelete = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "delete Api - usuariosDelete"
    });
  }

  const usuariosPatch = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "patch Api - usuariosPatch"
    });
  }

  module.exports ={
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch
  }