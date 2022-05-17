const jwt = require('jsonwebtoken');


const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = {uid};

    jwt.sign(payload, process.env.SECRETORPRIVATEKEY,{
        // aqui podemos poner la exipracion del token puede ser en dias u horas
        // expiresIn: '365d'
        expiresIn: '4h'
    }, (err, token) => {
        if(err){
            console.log(err);
            reject('No se pudo generar el token')
        }else{
            resolve(token);
        }
    })
    })
}




module.exports = {
    generarJWT
}