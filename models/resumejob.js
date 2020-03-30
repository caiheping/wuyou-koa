'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResumeJob = sequelize.define('ResumeJob', {
    resume: {
      type: DataTypes.INTEGER,
      comment: '所属简历'
    },
    place: {
      type: DataTypes.STRING,
      comment: '地点'
    },
    function: {
      type: DataTypes.TEXT,
      comment: '职能'
    },
    payType: {
      type: DataTypes.INTEGER,
      comment: '薪资类型，1：月薪，2：年薪'
    },
    salaryExpectation: {
      type: DataTypes.INTEGER,
      comment: '期望薪资'
    },
    workType: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '工作类型'
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '行业'
    },
    arrivalTime: {
      type: DataTypes.INTEGER,
      comment: '到岗时间，1：一周内， 2：一个月内， 3：随时'
    },
    selfEvaluation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '自我评价'
    },
    personalTags: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '个人标签'
    }
  }, {});
  ResumeJob.associate = function(models) {
    // associations can be defined here
  };
  return ResumeJob;
};
