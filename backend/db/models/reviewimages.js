'use strict';
const {
  Model
} = require('sequelize');
const { Reviews } = require('../models')
module.exports = (sequelize, DataTypes) => {
  class ReviewImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReviewImages.hasMany(models.Reviews, {foreignKey:'reviewId'})

      // define association here
    }
  }
  ReviewImages.init({
    reviewId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ReviewImages',
  });
  return ReviewImages;
};