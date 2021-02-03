const db = require("../models");
var CryptoJS = require("crypto-js");
const User = db.user;
const Op = db.Sequelize.Op;

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

//retrieve one user based on email
exports.findOne = (req, res) => {
    User.findAll({where: {Correo: req.params.id}})
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
  if(!req.body.fechac || !req.body.correo || !req.body.nombres || !req.body.apellidos || !req.body.contrasena || !req.body.rol){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  const usuario = {
        fechaC: req.body.fechac,
        Correo: req.body.correo,
        Nombres: req.body.nombres,
        Apellidos: req.body.apellidos,
        Contrasena: CryptoJS.MD5(req.body.contrasena).toString(),
        Rol: req.body.rol
    };
  User.create(usuario)
        .then(data => {
            res.redirect('/users');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error con la reacion del usuario"
            });
        });
};

exports.update = (req, res) => {
  if(!req.body.correo || !req.body.nombres || !req.body.apellidos || !req.body.contrasena){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  User.update({Nombres: req.body.nombres, Apellidos: req.body.apellidos, Contrasena: CryptoJS.MD5(req.body.contrasena).toString()},{where: {Correo: req.body.correo}})
    .then(data => {
      res.redirect('/users');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while updating user."
      });
    });
};

//delete user
exports.delete = (req, res) => {
  if(!req.body.correo){
    res.status(400).send({
      message: "Id not included in data. Please try again"
    });
    return;
  }
    User.destroy({
    where: { Correo: req.body.correo}
  }).then(data => {
      res.redirect('/users');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while deleting user."
      });
    });
};
