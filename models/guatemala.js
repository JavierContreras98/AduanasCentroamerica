const { Schema, model } = require('mongoose');
//codigo, nombreproyecto, monto y fecha en el servidor de base de datos(mongo)

const GuatemalaSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    monto: {
        type: Number,
        required: [true, 'La contraseña es obligatoria'],
    },
    fecha: {
        type: Date,
        required: [true, 'La contraseña es obligatoria'],
    },
});

GuatemalaSchema.methods.toJSON = function(){
    const{__v, ...guatemala} = this.toObject();
    return guatemala
  }

module.exports = model( 'Guatemalas', GuatemalaSchema );