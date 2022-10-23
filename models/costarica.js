const { Schema, model } = require("mongoose");

const CostaRicaSchema = Schema({
  codigo: {
    type: String,
    required: [true, "El codigo es obligatorio"],
    unique: true,
  },
  nombreproyecto: {
    type: String,
    required: [true, "El nombre del proyecto es obligatorio"],
  },
  paisqueejecuta: {
    type: String,
    required: true,
    emun:['El Salvador', 'Costa Rica', 'Guatemala', 'Nicaragua', 'Honduras']
  },
  fechacierre: {
    type: Date,
    required: [true, "La fecha de cierre es obligatoria"],
  },
});

CostaRicaSchema.methods.toJSON = function(){
    const{__v, ...costarica} = this.toObject();
    return costarica
  }
  
  module.exports = model("CostaRicas", CostaRicaSchema);