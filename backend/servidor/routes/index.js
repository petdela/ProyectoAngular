var express = require('express');
var router = express.Router();

const datosController = require("../controllers/index.controller.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





module.exports = router;
