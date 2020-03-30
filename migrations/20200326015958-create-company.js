'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyName: {
        type: Sequelize.STRING,
        comment: '公司名称'
      },
      companyType: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        comment: '公司类型，1：国企，2：私企，3：外企，4：其他'
      },
      companyAddr: {
        type: Sequelize.STRING,
        comment: '公司详细地址'
      },
      companyArea: {
        type: Sequelize.STRING,
        comment: '所属区域'
      },
      companyIntroduce: {
        type: Sequelize.TEXT,
        comment: '公司介绍'
      },
      companyPersonnel: {
        type: Sequelize.INTEGER,
        comment: '人员'
      },
      companyStartTime: {
        type: Sequelize.DATE,
        comment: '成立时间'
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
    return queryInterface.dropTable('Companies');
  }
};
