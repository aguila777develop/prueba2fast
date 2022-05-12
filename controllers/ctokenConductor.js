const { response } = require("express");


const ctokenConductorGet =  (req, res= response) => {
    res.json({
        "ok": true,
        "msg": "get Api ctoken Conductor"
    });
  }

  const ctokenConductorPut =(req, res = response) => {
    res.json({
        "ok": true,
        "msg": "put Api ctoken Conductor"
    });
  }
  const ctokenConductorPost = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "post  ctoken Conductor"
    });
  }



  module.exports ={
    ctokenConductorGet,
    ctokenConductorPost,
    ctokenConductorPut
  }