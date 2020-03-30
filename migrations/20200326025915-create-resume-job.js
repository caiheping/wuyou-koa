'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ResumeJobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resume: {
        type: Sequelize.INTEGER,
        comment: '所属简历'
      },
      place: {
        type: Sequelize.STRING,
        comment: '地点'
      },
      function: {
        type: Sequelize.TEXT,
        comment: '职能'
      },
      payType: {
        type: Sequelize.INTEGER,
        comment: '薪资类型，1：月薪，2：年薪'
      },
      salaryExpectation: {
        type: Sequelize.INTEGER,
        comment: '期望薪资'
      },
      workType: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '工作类型'
      },
      industry: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '行业'
      },
      arrivalTime: {
        type: Sequelize.INTEGER,
        comment: '到岗时间，1：一周内， 2：一个月内， 3：随时'
      },
      selfEvaluation: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: '自我评价'
      },
      personalTags: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '个人标签'
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
    return queryInterface.dropTable('ResumeJobs');
  }
};
