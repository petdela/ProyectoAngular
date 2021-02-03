const db = require("../models");
var CryptoJS = require("crypto-js");
const Subs = db.subs;
const Op = db.Sequelize.Op;

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
  Subs.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving resenas."
      });
    });
};

//retrieve one user based on email
exports.findOne = (req, res) => {
    Subs.findAll({where: {Id_subscriptor: req.params.id}})
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

exports.create = (req, res) => {
  if(!req.body.correo){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  const suscriptor = {
        DireccionCorreoE: req.body.correo
    };
  Subs.create(suscriptor)
        .then(data => {
            res.redirect('/subs');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error con la reacion de la resena"
            });
        });
};
