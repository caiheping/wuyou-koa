'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ResumeProjectExperiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectName: {
        type: Sequelize.STRING,
        comment: '项目名称'
      },
      resume: {
        type: Sequelize.INTEGER,
        comment: '所属简历'
      },
      startTime: {
        type: Sequelize.DATE,
        comment: '开始时间'
      },
      endTime: {
        type: Sequelize.DATE,
        comment: '结束时间'
      },
      projectDescription: {
        type: Sequelize.TEXT,
        comment: '项目描述'
      },
      responsibilityDescription: {
        type: Sequelize.TEXT,
        comment: '责任描述'
      },
      affiliatedCompany: {
        type: Sequelize.STRING,
        comment: '所属公司'
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
    return queryInterface.dropTable('ResumeProjectExperiences');
  }
};
