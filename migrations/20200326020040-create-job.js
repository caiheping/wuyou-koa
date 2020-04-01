'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jobName: {
        type: Sequelize.STRING,
        comment: '职业名称'
      },
      company: {
        type: Sequelize.INTEGER,
        comment: '所属公司'
      },
      minSalary: {
        type: Sequelize.INTEGER,
        comment: '最小薪资'
      },
      maxSalary: {
        type: Sequelize.INTEGER,
        comment: '最大薪资'
      },
      describe: {
        type: Sequelize.TEXT,
        comment: '描述'
      },
      workingMinYears: {
        type: Sequelize.INTEGER,
        comment: '最小工作年限'
      },
      workingMaxYears: {
        type: Sequelize.INTEGER,
        comment: '最大工作年限'
      },
      education: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        comment: '学历(1：大专， 2：本科， 3：硕士， 4：博士， 5：其他)'
      },
      recruitment: {
        type: Sequelize.INTEGER,
        comment: '招聘人数'
      },
      city: {
        type: Sequelize.STRING,
        comment: '发布城市'
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
    return queryInterface.dropTable('Jobs');
  }
};
