const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { existeGuatemalaPorId } = require('../helpers/db-validators');

const { guatemalaGet,
        guatemalaPost,
        guatemalaPut,
        guatemalaDelete
     } = require('../controllers/guatemala');

const router = Router();


router.get('/', guatemalaGet );

router.post('/',
[
    check('codigo', 'El codigo es obligatorio').not().isEmpty(),
    check('nombreproyecto', 'El nombre de proyecto no puede ser vacio').not().isEmpty(),
    check('monto', 'El monto no puede ser vacio').not().isEmpty(),
    validarCampos
],guatemalaPost );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check("codigo", "El codigo es obligatorio").not().isEmpty(),
    check("nombreproyecto", "El nombre de proyecto no puede ser vacio").not().isEmpty(),
    check("monto", "El monto no puede ser vacio").not().isEmpty(),
    validarCampos
],guatemalaPut );

router.delete(
"/:id",
[
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeGuatemalaPorId),
    validarCampos,
],guatemalaDelete
  );

module.exports = router;