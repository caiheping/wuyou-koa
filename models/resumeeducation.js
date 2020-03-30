'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResumeEducation = sequelize.define('ResumeEducation', {
    schoolName: {
      type: DataTypes.STRING,
      comment: '学校名称'
    },
    resume: {
      type: DataTypes.INTEGER,
      comment: '所属简历'
    },
    enrollmentTime: {
      type: DataTypes.DATE,
      comment: '入学时间'
    },
    graduationTime: {
      type: DataTypes.DATE,
      comment: '毕业时间'
    },
    education: {
      type: DataTypes.INTEGER,
      comment: '学历'
    },
    major: {
      type: DataTypes.STRING,
      comment: '专业'
    },
    majorDesc: {
      type: DataTypes.STRING,
      comment: '专业描述'
    },
    isOverseasStudy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '是否留学'
    }
  }, {});
  ResumeEducation.associate = function(models) {
    // associations can be defined here
  };
  return ResumeEducation;
};
