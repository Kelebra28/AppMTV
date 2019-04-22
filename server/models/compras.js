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
    Compras.associate = function() {
    Compras.belongsTo(compras.Users,{foreignKey:"userId"})
    Compras.belongsTo(compras.Products,{foreignKey:"productsId"})
  };
  return Compras;
};
