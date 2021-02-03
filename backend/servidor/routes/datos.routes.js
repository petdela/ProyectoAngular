var express = require('express');
var router = express.Router();

const datosController = require("../controllers/datos.controller.js");

/* GET datos. */
router.get('/', datosController.findAll);

/* GET vista datos. */
router.get('/view', datosController.findAllView);

/* GET datos longitud latitud */
router.get('/:id', datosController.findOne);

module.exports = router;
