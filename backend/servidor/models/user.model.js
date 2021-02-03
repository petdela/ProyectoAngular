module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("usuario", {
    fechaC: {
      type: DataTypes.DATE
    },
    Correo: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    Nombres: {
      type: DataTypes.STRING
    },
    Apellidos: {
      type: DataTypes.STRING
    },
    Contrasena: {
      type: DataTypes.STRING
    },
    Rol: {
      type: DataTypes.INTEGER
    },
  }, {
  	timestamps: false
  });

  return User;
};