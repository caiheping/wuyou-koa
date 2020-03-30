'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    index: {
      type: DataTypes.STRING,
      comment: '索引'
    },
    image: {
      type: DataTypes.STRING,
      comment: '图片'
    },
    url: {
      type: DataTypes.STRING,
      comment: '链接地址'
    }
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
  };
  return Banner;
};
