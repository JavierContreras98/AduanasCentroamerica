const { response, request } = require("express");

const CostaRicas = require("../models/costarica");

const costaricaGet = async (req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
  
    const [nombre, carnet, total, costaRica] = await Promise.all([
        (this.nombre = "Javier Enrique Contreras Saravia"),
        (this.carnet = "25-3159-2017"),
        CostaRicas.countDocuments(query),
        CostaRicas.find(query).skip(Number(desde)).limit(Number(limite)),
    ]);
  
    res.json({
      nombre,
      carnet,
      total,
      costaRica,
    });
  };

const costaricaPost = async (req, res = response) => {
    const { codigo, nombreproyecto, paisqueejecuta } = req.body;
    let fechacierre = new Date();
  
    (nombre = "Javier Enrique Contreras Saravia"),
    (carnet = "25-3159-2017");
    const costarica = new CostaRicas({codigo, nombreproyecto, paisqueejecuta, fechacierre,});
    await costarica.save();
  
    res.json({
      nombre,
      carnet,
      costarica,
    });
  };

const costaricaPut = async (req, res = response) => {
    const { id } = req.params;
    const { codigo, nombreproyecto, paisqueejecuta } = req.body;
  
    (nombre = "Javier Enrique Contreras Saravia"),
    (carnet = "25-3159-2017");
    const costarica = await CostaRicas.findByIdAndUpdate(id, {
      codigo,
      nombreproyecto,
      paisqueejecuta,
    });
  
    res.json({ nombre, carnet, costarica });
  };
  
const costaricaDelete = async (req, res = response) => {
    const { id } = req.params;
    (nombre = "Javier Enrique Contreras Saravia"),
    (carnet = "25-3159-2017");
    const costarica = await CostaRicas.findByIdAndDelete(id);
  
    res.json({ 
        nombre, 
        carnet, 
        costarica 
    });
};
  
  module.exports = {
    costaricaGet,
    costaricaPost,
    costaricaPut,
    costaricaDelete,
  };