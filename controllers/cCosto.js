const { response } = require("express");



const cCostoGet = (req, res= response) => {
    res.json({
        "ok": true,
        "msg": "get Api cCosto"
    });
  }
const cCostoPut = (req, res= response) => {
    res.json({
        "ok": true,
        "msg": "put Api cCosto"
    });
  }


  module.exports ={
    cCostoGet,
    cCostoPut
  }