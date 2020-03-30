'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Areas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aTitle: {
        type: Sequelize.STRING,
        comment: '区域名称'
      },
      isHot: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '是否热门区域'
      },
      parent: {
        type: Sequelize.INTEGER,
        comment: '父Id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Areas');
  }
};
