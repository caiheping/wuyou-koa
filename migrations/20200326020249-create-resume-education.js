'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ResumeEducations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolName: {
        type: Sequelize.STRING,
        comment: '学校名称'
      },
      resume: {
        type: Sequelize.INTEGER,
        comment: '所属简历'
      },
      enrollmentTime: {
        type: Sequelize.DATE,
        comment: '入学时间'
      },
      graduationTime: {
        type: Sequelize.DATE,
        comment: '毕业时间'
      },
      education: {
        type: Sequelize.INTEGER,
        comment: '学历'
      },
      major: {
        type: Sequelize.STRING,
        comment: '专业'
      },
      majorDesc: {
        type: Sequelize.STRING,
        comment: '专业描述'
      },
      isOverseasStudy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: '是否留学'
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
    return queryInterface.dropTable('ResumeEducations');
  }
};
