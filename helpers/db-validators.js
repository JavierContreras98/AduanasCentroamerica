const Pais = require('../models/paises');
const Guatemala = require('../models/guatemala');
const CostaRica = require('../models/costarica')

const esPaisValido = async(paisqueejecuta = '') => {

    const existePais = await Pais.findOne({paisqueejecuta});
    if ( !existePais ) {
        throw new Error(`El pais ${ paisqueejecuta } no está registrado en la base de datos`);
    }
}

const existeGuatemalaPorId = async( id ) => {

    const existeGuatemala = await Guatemala.findById(id);
    if ( !existeGuatemala ) {
        throw new Error(`El id no existe en la base de datos ${ id }`);
    }
}

const existeCostaRicaPorId = async( id ) => {

    const existeCostaRica = await CostaRica.findById(id);
    if ( !existeCostaRica ) {
        throw new Error(`El id no existe en la base de datos ${ id }`);
    }
}


module.exports = {
    esPaisValido,
    existeGuatemalaPorId,
    existeCostaRicaPorId
}