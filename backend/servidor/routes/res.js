var express = require('express');
var router = express.Router();

const resController = require("../controllers/res.controller.js");

//Busqueda
router.get('/', resController.findAll);
router.get('/:id', resController.findOne);

//Anadir
router.post('/save', resController.create);

//Update
router.post('/update', resController.update);

//Delete
router.post('/delete', resController.delete);
module.exports = router;
