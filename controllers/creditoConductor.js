const { response } = require("express");


const creditoConductorGet = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "get Api credito Conductor"
    });
  }

  const creditoConductorPut = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "put Api credito Conductor"
    });
  }
  const creditoConductorPost = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "post Api credito Conductor"
    });
  }

  module.exports ={
    creditoConductorGet,
    creditoConductorPut,
    creditoConductorPost
}