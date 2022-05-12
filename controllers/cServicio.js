const { response } = require("express");



const cServicioGet = (req, res= response) => {
    res.json({
        "ok": true,
        "msg": "get Api  cServicio"
    });
  }
const cServicioPost = (req, res= response) => {
    res.json({
        "ok": true,
        "msg": "post Api  cServicio"
    });
  }

const cServicioPut = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "put Api  cServicio"
    });
  }

  module.exports ={
    cServicioGet,
    cServicioPost,
    cServicioPut
  }