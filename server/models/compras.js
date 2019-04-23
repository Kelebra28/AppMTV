'use strict';
module.exports = (sequelize, DataTypes) => {
  var Compras = sequelize.define('Compras', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    total_price: DataTypes.DECIMAL(10,2),
  }, {});
    Compras.associate = function(models) {
    Compras.belongsTo(models.Users,{foreignKey:"userId"})
    Compras.belongsTo(models.Products,{foreignKey:"productsId"})
  };
  return Compras;
};
