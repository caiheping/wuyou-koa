'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResumeProjectExperience = sequelize.define('ResumeProjectExperience', {
    projectName: {
      type: DataTypes.STRING,
      comment: '项目名称'
    },
    resume: {
      type: DataTypes.INTEGER,
      comment: '所属简历'
    },
    startTime: {
      type: DataTypes.DATE,
      comment: '开始时间'
    },
    endTime: {
      type: DataTypes.DATE,
      comment: '结束时间'
    },
    projectDescription: {
      type: DataTypes.TEXT,
      comment: '项目描述'
    },
    responsibilityDescription: {
      type: DataTypes.TEXT,
      comment: '责任描述'
    },
    affiliatedCompany: {
      type: DataTypes.STRING,
      comment: '所属公司'
    }
  }, {});
  ResumeProjectExperience.associate = function(models) {
    // associations can be defined here
  };
  return ResumeProjectExperience;
};
