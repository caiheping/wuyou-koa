'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      comment: '用户名'
    },
    password: {
      type: DataTypes.STRING,
      comment: '密码'
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: null,
      comment: '邮箱'
    },
    userType: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      comment: '用户类型，1：管理员，10，普通用户'
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: null,
      comment: '头像'
    },
    area: {
      type: DataTypes.STRING,
      defaultValue: null,
      comment: '所在区域'
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'] // 返回的数据排除这些字段
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
