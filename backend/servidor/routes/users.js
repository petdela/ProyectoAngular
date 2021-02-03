var express = require('express');
var router = express.Router();

const usersController = require("../controllers/users.controller.js");

//Busqueda
router.get('/', usersController.findAll);
router.get('/:id', usersController.findOne);

//Anadir
router.post('/save', usersController.create);

//Update
router.post('/update', usersController.update);

//Delete
router.post('/delete', usersController.delete);
module.exports = router;
