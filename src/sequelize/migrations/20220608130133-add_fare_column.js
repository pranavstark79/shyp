'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn('Routes', 'fare', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'Routes',
      'fare'
    );
  }
}
