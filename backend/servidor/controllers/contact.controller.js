const db = require("../models");
var CryptoJS = require("crypto-js");
const Contact = db.contact;
const Op = db.Sequelize.Op;

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
  Contact.findAll()
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
    Contact.findAll({where: {id_contacto: req.params.id}})
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
  if(!req.body.correo || !req.body.telefono || !req.body.direccion){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  const contacto = {
        //id_contacto: 1;
        Correo: req.body.correo,
        Telefono: req.body.telefono,
        Direccion: req.body.direccion,
        Usuario: 1,
    };
  Contact.create(contacto)
        .then(data => {
            res.redirect('/contact');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error con la reacion de la resena"
            });
        });
};

exports.update = (req, res) => {
  if(!req.body.correo || !req.body.telefono || !req.body.direccion){
    res.status(400).send({
      message: "Uno de los campos no ha sido incluido"
    });
    return;
  }
  Contact.update({Correo: req.body.correo, Telefono: req.body.telefono, Direccion: req.body.direccion},{where: {id_contacto: req.body.id}})
    .then(data => {
      res.redirect('/contact');
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
    Contact.destroy({
    where: { id_contacto: req.body.id}
  }).then(data => {
      res.redirect('/contact');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while deleting user."
      });
    });
};
