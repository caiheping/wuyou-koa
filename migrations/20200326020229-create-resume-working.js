'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ResumeWorkings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING,
        comment: '公司'
      },
      resume: {
        type: Sequelize.INTEGER,
        comment: '所在简历'
      },
      startTime: {
        type: Sequelize.DATE,
        comment: '开始时间'
      },
      endTime: {
        type: Sequelize.DATE,
        comment: '结束时间'
      },
      position: {
        type: Sequelize.STRING,
        comment: '职位'
      },
      jobDescription: {
        type: Sequelize.TEXT,
        comment: '工作描述'
      },
      industry: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '行业'
      },
      department: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '部门'
      },
      nature: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '性质'
      },
      other: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '其他'
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '类型'
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
    return queryInterface.dropTable('ResumeWorkings');
  }
};
