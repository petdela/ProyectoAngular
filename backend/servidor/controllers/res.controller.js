const db = require("../models");
var CryptoJS = require("crypto-js");
const Res = db.res;
const Op = db.Sequelize.Op;

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
  Res.findAll()
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
    Res.findAll({where: {Id_resena: req.params.id}})
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
  if(!req.body.estado || !req.body.id || !req.body.usuario){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  const resena = {
        Estado: req.body.estado,
        Id_resena: req.body.id,
        Contenido: null,
        Usuario_res: req.body.usuario,
    };
  Res.create(resena)
        .then(data => {
            res.redirect('/res');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error con la reacion de la resena"
            });
        });
};

exports.update = (req, res) => {
  if(!req.body.estado || !req.body.id || !req.body.usuario){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  Res.update({Estado: req.body.estado, Contenido: null},{where: {Id_resena: req.body.id}})
    .then(data => {
      res.redirect('/res');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while updating serv."
      });
    });
};

//delete user
exports.delete = (req, res) => {
  if(!req.body.id){
    res.status(400).send({
      message: "Id not included in data. Please try again"
    });
    return;
  }
    Res.destroy({
    where: { Id_resena: req.body.id}
  }).then(data => {
      res.redirect('/res');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while deleting user."
      });
    });
};
