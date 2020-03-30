'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResumeWorking = sequelize.define('ResumeWorking', {
    company: {
      type: DataTypes.STRING,
      comment: '公司'
    },
    resume: {
      type: DataTypes.INTEGER,
      comment: '所在简历'
    },
    startTime: {
      type: DataTypes.DATE,
      comment: '开始时间'
    },
    endTime: {
      type: DataTypes.DATE,
      comment: '结束时间'
    },
    position: {
      type: DataTypes.STRING,
      comment: '职位'
    },
    jobDescription: {
      type: DataTypes.TEXT,
      comment: '工作描述'
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '行业'
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '部门'
    },
    nature: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '性质'
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '其他'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '类型'
    }
  }, {});
  ResumeWorking.associate = function(models) {
    // associations can be defined here
  };
  return ResumeWorking;
};
