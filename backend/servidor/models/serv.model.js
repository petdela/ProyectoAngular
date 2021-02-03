module.exports = (sequelize, DataTypes) => {
  const Serv = sequelize.define("servicio", {
    Estado: {
      type: DataTypes.STRING
    },
    MiniDes: {
      type: DataTypes.STRING
    },
    Titulo: {
      type: DataTypes.STRING
    },
    Codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Contenido: {
      type: DataTypes.JSON
    },
  }, {
  	timestamps: false
  });

  return Serv;
};