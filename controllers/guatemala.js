const { response, request } = require('express');

const Guatemalas = require('../models/guatemala');

const guatemalaGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [nombre, carnet, total, guatemala ] = await Promise.all([
        (this.nombre = "Javier Enrique Contreras Saravia"),
        (this.carnet = "25-3159-2017"),
        Guatemalas.countDocuments(query),
        Guatemalas.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        nombre,
        carnet,
        total,
        guatemala
    });
}

const guatemalaPost = async(req, res = response) => {
    
    const { codigo, nombreproyecto, monto } = req.body;
    let fecha = new Date();

    (nombre = "Javier Enrique Contreras Saravia"),
    (carnet = "25-3159-2017");
    const guatemala = new Guatemalas({ codigo, nombreproyecto, monto, fecha });
    // Guardar en BD
    await guatemala.save();

    res.json({
        nombre,
        carnet,
        guatemala,
    });
}

const guatemalaPut = async(req, res = response) => {

    const { id } = req.params;
    const {codigo, nombreproyecto, monto} = req.body;

    (nombre = "Javier Enrique Contreras Saravia"),
    (carnet = "25-3159-2017");
    const guatemala = await Guatemalas.findByIdAndUpdate(id, {
        codigo,
        nombreproyecto,
        monto,
      });

    res.json({
        nombre, 
        carnet,
        guatemala
    });
}

const guatemalaDelete = async (req, res = response) => {
    const { id } = req.params;
    (nombre = "Javier Enrique Contreras Saravia"),
    (carnet = "25-3159-2017");
    const guatemala = await Guatemalas.findByIdAndDelete(id);
  
    res.json({ 
        nombre, 
        carnet, 
        guatemala 
    });
};

module.exports = {
    guatemalaGet,
    guatemalaPost,
    guatemalaPut,
    guatemalaDelete,
}