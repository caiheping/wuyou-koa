'use strict';
module.exports = (sequelize, DataTypes) => {
  const Welfare = sequelize.define('Welfare', {
    welfareName: {
      type: DataTypes.STRING,
      comment: '名称'
    },
    company: {
      type: DataTypes.INTEGER,
      comment: '所属公司'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Welfare.associate = function(models) {
    // associations can be defined here
  };
  return Welfare;
};
