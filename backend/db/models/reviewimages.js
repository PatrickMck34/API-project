'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReviewImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReviewImages.belongsTo(models.Reviews)

      // define association here
    }
  }
  ReviewImages.init({
    reviewId: DataTypes.INTEGER,
    url: {type: DataTypes.STRING,
      allowNull: false,},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ReviewImages',
    defaultScope: {
      attributes: {
        exclude: [ "updatedAt", "createdAt", "reviewId",]
      }
    },
  });
  return ReviewImages;
};