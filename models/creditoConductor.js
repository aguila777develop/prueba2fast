const { Schema, model } = require('mongoose');

const CreditoSchema = Schema({
    credito: {
        type: Number,
        required: false
    },
    fechaRecarga:{
        type: String,
        required: false,
    },
});
CreditoSchema.methods.toJSON = function() {
    const { __v, ...credito  } = this.toObject();
    return credito;
}

module.exports = model( 'Credito', CreditoSchema );