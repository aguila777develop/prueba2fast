const { response } = require('express');
const Credito = require('../models/creditoConductor');



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
  const creditoConductorPost = async (req, res = response) => {

    //  const { credito, fechaRecarga }
     const {credito,fechaRecarga } = req.body;
    // const usuario = new Usuario({ nombre, correo, password, rol });


    // const { } = req.body;
     const creditoDriver = new Credito({credito, fechaRecarga});
     await creditoDriver.save();
    res.json({
        "ok": true,
        "msg": "post Api credito Conductor",
        credito, 
        fechaRecarga
    });

    // guarda en la BD
  }

  module.exports ={
    creditoConductorGet,
    creditoConductorPut,
    creditoConductorPost
}