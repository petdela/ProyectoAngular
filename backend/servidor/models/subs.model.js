module.exports = (sequelize, DataTypes) => {
  const Subs = sequelize.define("suscriptor", {
    Id_suscriptor: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    DireccionCorreoE: {
      type: DataTypes.STRING,
    },
    fechaSus: {
      type: DataTypes.DATE
    }
  }, {
  	timestamps: false
  });

  return Subs;
};