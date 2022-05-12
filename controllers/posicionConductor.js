const { response } = require('express');


const posicionConductorGet = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "get Api Posicion Conductor"
    });
  }
const posicionConductorPut = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "put Api Posicion Conductor"
    });
  }
  const posicionConductorPost = (req, res= response) => {
    res.json({
        "ok": true,
        "msg": "post Api Posicion Conductor"
    });
  }

  module.exports ={
    posicionConductorGet,
    posicionConductorPut,
    posicionConductorPost
    
}