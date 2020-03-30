'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resumes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resumeName: {
        type: Sequelize.STRING,
        comment: '简历名称'
      },
      user: {
        type: Sequelize.INTEGER,
        comment: '所属用户'
      },
      isOpen: {
        type: Sequelize.INTEGER,
        comment: '是否公开'
      },
      resumeUsername: {
        type: Sequelize.STRING,
        comment: '简历的用户名'
      },
      pic: {
        type: Sequelize.STRING,
        comment: '图片'
      },
      experience: {
        type: Sequelize.INTEGER,
        comment: '工作经验'
      },
      sex: {
        type: Sequelize.INTEGER,
        comment: '性别，1：男，0：女'
      },
      birthday: {
        type: Sequelize.DATE,
        comment: '出生年月'
      },
      phone: {
        type: Sequelize.INTEGER(11),
        comment: '手机号码'
      },
      status: {
        type: Sequelize.INTEGER,
        comment: '状态'
      },
      startWorking: {
        type: Sequelize.DATE,
        comment: '开始工作时间'
      },
      addr: {
        type: Sequelize.STRING,
        comment: '地址'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '邮箱'
      },
      IDCard: {
        type: Sequelize.INTEGER,
        comment: '身份证'
      },
      annualIncome: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: '年收入/万（元）'
      },
      hukouOrNationality: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '户口/国籍'
      },
      maritalStatus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: '婚姻状况'
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
    return queryInterface.dropTable('Resumes');
  }
};
