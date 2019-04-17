
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    description: DataTypes.TEXT,
  }, {});
    Products.associate = function(models) {
    Products.belongsTo(models.Users,{foreignKey:"userId",as:"user"})
    Products.hasMany(models.Bookings,{foreignKey:"houseId"})
  };
  return Products;
};
