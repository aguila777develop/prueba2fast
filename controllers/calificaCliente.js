const { response } = require("express");


const calificaClienteGet = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "get Api Califica Cliente 666"
    });
  }

const calificaClientePost = (req, res= response) => {
    res.json({
        "ok": true,
        "msg": "post Api Califica Cliente777"
    });
  }


const calificaClientePut = (req, res= response) => {
    res.json({
        "ok": true,
        "msg": "put Api Califica Cliente 888"
    });
  }

  module.exports = {
    calificaClienteGet,
    calificaClientePost,
    calificaClientePut
  }