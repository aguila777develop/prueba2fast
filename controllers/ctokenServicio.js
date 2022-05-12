const { response } = require("express");


const ctokenServicioGet = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "get Api ctokenServicio"
    });
  }


  const ctokenServicioPut = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "put Api ctokenServicio"
    });
  }



  module.exports ={
    ctokenServicioGet,
    ctokenServicioPut

  }