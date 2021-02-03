var express = require('express');
var router = express.Router();

const subsController = require("../controllers/subs.controller.js");

//Busqueda
router.get('/', subsController.findAll);
router.get('/:id', subsController.findOne);

//Anadir
router.post('/save', subsController.create);

//Update
//router.post('/update', subsController.update);

//Delete
//router.post('/delete', subsController.delete);
module.exports = router;
