module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("contacto", {
    id_contacto: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Correo: {
      type: DataTypes.STRING,
    },
    Telefono: {
      type: DataTypes.STRING
    },
    Direccion: {
      type: DataTypes.STRING
    },
    Usuario: {
      type: DataTypes.INTEGER
    }
  }, {
  	timestamps: false
  });

  return Contact;
};