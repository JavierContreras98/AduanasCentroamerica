const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const {esPaisValido, existeCostaRicaPorId,} = require("../helpers/db-validators");

const {
    costaricaGet,
    costaricaPost,
    costaricaPut,
    costaricaDelete,
  } = require("../controllers/costarica");
  
  const router = Router();
  
  router.get("/", costaricaGet);

  router.post(
    "/",
    [
      check("codigo", "El codigo es requerido").not().isEmpty(),
      check("nombreproyecto", "El nombre es requerido").not().isEmpty(),
      check("paisqueejecuta", "El pais es requerido").not().isEmpty(),
      check("paisqueejecuta").custom(esPaisValido),
      validarCampos,
    ],
    costaricaPost
  );

  router.put(
    "/:id",
    [
      check("id", "No es un ID válido").isMongoId(),
      check("id").custom(existeCostaRicaPorId),
      check("codigo", "El codigo es requerido").not().isEmpty(),
      check("nombreproyecto", "El nombre es requerido").not().isEmpty(),
      check("paisqueejecuta", "El pais es requerido").not().isEmpty(),
      check("paisqueejecuta").custom(esPaisValido),
      validarCampos,
    ],
    costaricaPut
  );
  
  router.delete(
    "/:id",
    [
      check("id", "No es un ID válido").isMongoId(),
      check("id").custom(existeCostaRicaPorId),
      validarCampos,
    ],
    costaricaDelete
  );
  
  module.exports = router;