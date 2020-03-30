'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    jobName: {
      type: DataTypes.STRING,
      comment: '职业名称'
    },
    company: {
      type: DataTypes.INTEGER,
      comment: '所属公司'
    },
    minSalary: {
      type: DataTypes.INTEGER,
      comment: '最小薪资'
    },
    maxSalary: {
      type: DataTypes.INTEGER,
      comment: '最大薪资'
    },
    describe: {
      type: DataTypes.TEXT,
      comment: '描述'
    },
    workingMinYears: {
      type: DataTypes.INTEGER,
      comment: '最小工作年限'
    },
    workingMaxYears: {
      type: DataTypes.INTEGER,
      comment: '最大工作年限'
    },
    education: {
      type: DataTypes.INTEGER,
      comment: '学历'
    },
    recruitment: {
      type: DataTypes.INTEGER,
      comment: '招聘人数'
    },
    city: {
      type: DataTypes.STRING,
      comment: '发布城市'
    }
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};
