'use strict';
module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    aTitle: {
      type: DataTypes.STRING,
      comment: '区域名称'
    },
    isHot: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      comment: '是否热门区域'
    },
    parent: {
      type: DataTypes.INTEGER,
      comment: '父Id'
    }
  }, {});
  Area.associate = function(models) {
    // associations can be defined here
  };
  return Area;
};
