'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    jobName: {
      type: DataTypes.STRING,
      comment: '职业名称'
    },
    company: {
      type: DataTypes.INTEGER,
      comment: '所属公司',
      references: {
        model: 'Company',
        key: 'id'
      }
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
      defaultValue: 1,
      comment: '学历(1：大专， 2：本科， 3：硕士， 4：博士， 5：其他)'
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
    Job.belongsTo(models.Company, {
      foreignKey: 'company'
    });
  };
  return Job;
};
