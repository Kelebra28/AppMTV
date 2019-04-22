'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      "Products",
      "userId",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
 
    )

    queryInterface.addColumn(
      "Compras",
      "productId",{
        type:Sequelize.UUID,
        references:{
          model:'Products',
          key:"id"
        }
      }

    )


    queryInterface.addColumn(
      "Compras",
      "userId",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }

    )

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
  }
};
