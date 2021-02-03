const Datos = require("../collections/datos.model");
var mongoose = require('mongoose');

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
    
    Datos.find({}, (err, docs) => {
        res.send(docs)
    })
};

exports.findAllView = (req, res) => {
	Datos.find({}, (err, docs) => {
        //res.send(docs)
        res.render('index', {titulo: 'Usuario', datos: docs });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error"
      });
    });
};

exports.findOne2 = (req, res) => {
    Datos.findById(req.param.id)
    .then(result => {
         res.json(result);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error"
      });
    });

};

exports.findOne = (req, res) => {
    Datos.findOne({'_id' : String(req.params.id)}, (err, docs) => {
        res.json(docs)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error"
      });
    });

};

