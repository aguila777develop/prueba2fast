const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) => {

     //verificamos la validacion de que hizo los middelwares
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json(errors);
     }

     next();
}



module.exports ={
    validarCampos
}