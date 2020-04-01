'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    companyName: {
      type: DataTypes.STRING,
      comment: '公司名称'
    },
    companyType: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      comment: '公司类型，1：国企，2：私企，3：外企，4：其他'
    },
    companyAddr: {
      type: DataTypes.STRING,
      comment: '公司详细地址'
    },
    companyArea: {
      type: DataTypes.STRING,
      comment: '所属区域'
    },
    companyIntroduce: {
      type: DataTypes.TEXT,
      comment: '公司介绍'
    },
    companyPersonnel: {
      type: DataTypes.INTEGER,
      comment: '人员'
    },
    companyStartTime: {
      type: DataTypes.DATE,
      comment: '成立时间'
    }
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Welfare, {
      foreignKey: 'company'
    });
    Company.hasMany(models.Job, {
      foreignKey: 'company'
    });
  };
  return Company;
};
