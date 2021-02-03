var express = require('express');
var router = express.Router();

const contactController = require("../controllers/contact.controller.js");

//Busqueda
router.get('/', contactController.findAll);
router.get('/:id', contactController.findOne);

//Anadir
router.post('/save', contactController.create);

//Update
router.post('/update', contactController.update);

//Delete
router.post('/delete', contactController.delete);
module.exports = router;
