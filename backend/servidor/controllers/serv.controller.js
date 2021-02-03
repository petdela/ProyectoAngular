const db = require("../models");
var CryptoJS = require("crypto-js");
const Serv = db.serv;
const Op = db.Sequelize.Op;

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
  Serv.findAll()
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
    Serv.findAll({where: {Codigo: req.params.id}})
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
  if(!req.body.estado || !req.body.minides || !req.body.titulo || !req.body.codigo){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  const servicio = {
        Estado: req.body.estado,
        MiniDes: req.body.minides,
        Titulo: req.body.titulo,
        Codigo: req.body.codigo,
        Contenido: null,
    };
  Serv.create(servicio)
        .then(data => {
            res.redirect('/serv');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error con la reacion del usuario"
            });
        });
};

exports.update = (req, res) => {
  if(!req.body.estado || !req.body.minides || !req.body.titulo || !req.body.codigo){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  Serv.update({Estado: req.body.estado, MiniDes: req.body.minides, Titulo: req.body.titulo, Contenido: null},{where: {Codigo: req.body.codigo}})
    .then(data => {
      res.redirect('/serv');
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
    Serv.destroy({
    where: { Codigo: req.body.id}
  }).then(data => {
      res.redirect('/serv');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while deleting user."
      });
    });
};
