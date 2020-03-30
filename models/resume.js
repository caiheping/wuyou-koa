'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resume = sequelize.define('Resume', {
    resumeName: {
      type: DataTypes.STRING,
      comment: '简历名称'
    },
    user: {
      type: DataTypes.INTEGER,
      comment: '所属用户'
    },
    isOpen: {
      type: DataTypes.INTEGER,
      comment: '是否公开'
    },
    resumeUsername: {
      type: DataTypes.STRING,
      comment: '简历的用户名'
    },
    pic: {
      type: DataTypes.STRING,
      comment: '图片'
    },
    experience: {
      type: DataTypes.INTEGER,
      comment: '工作经验'
    },
    sex: {
      type: DataTypes.INTEGER,
      comment: '性别，1：男，0：女'
    },
    birthday: {
      type: DataTypes.DATE,
      comment: '出生年月'
    },
    phone: {
      type: DataTypes.INTEGER(11),
      comment: '手机号码'
    },
    status: {
      type: DataTypes.INTEGER,
      comment: '状态'
    },
    startWorking: {
      type: DataTypes.DATE,
      comment: '开始工作时间'
    },
    addr: {
      type: DataTypes.STRING,
      comment: '地址'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '邮箱'
    },
    IDCard: {
      type: DataTypes.INTEGER,
      comment: '身份证'
    },
    annualIncome: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '年收入/万（元）'
    },
    hukouOrNationality: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '户口/国籍'
    },
    maritalStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '婚姻状况'
    }
  }, {});
  Resume.associate = function(models) {
    // associations can be defined here
  };
  return Resume;
};
