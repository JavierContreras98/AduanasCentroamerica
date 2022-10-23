const { Schema, model } = require('mongoose');

const PaisesSchema = Schema({
    paisqueejecuta: {
        type: String,
        required: [true, 'El pais es obligatorio']
    }
});


module.exports = model( 'Paises', PaisesSchema );