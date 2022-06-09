
const Mensaje = require('../models/mensaje');

const obtenerChat = async(req, res) => {

    const miId = req.uid;
    const mensajesDe = req.params.de;

    const last30 = await Mensaje.find({
        $or: [{ de: miId, para: mensajesDe }, { de: mensajesDe, para: miId } ]
    })
    .sort({ createdAt: 'desc' })
    .limit(30);

    res.json({
        ok: true,
        // solo para probar regresar el id de uno y del otro
        // miId,
        // mensajesDe
        // msg:'hola mensajes'
        mensajes: last30
    })

}



module.exports = {
    obtenerChat
}