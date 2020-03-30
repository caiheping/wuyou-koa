'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        comment: '用户名'
      },
      password: {
        type: Sequelize.STRING,
        comment: '密码'
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: null,
        comment: '邮箱'
      },
      userType: {
        type: Sequelize.INTEGER,
        defaultValue: 10,
        comment: '用户类型，1：管理员，10，普通用户'
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: null,
        comment: '头像'
      },
      area: {
        type: Sequelize.STRING,
        defaultValue: null,
        comment: '所在区域'
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
    return queryInterface.dropTable('Users');
  }
};
