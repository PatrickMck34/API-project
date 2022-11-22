'use strict';
const {
  Model
} = require('sequelize');
const { ReviewImages } = require('../models')
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static async getReviewsAll(req){
      const {spotId, userId, review, stars} = req.query
        const reviews = await Reviews.findByPk(spotId)
            
            
            return (reviews)
          }
    static associate(models) {
      Reviews.belongsTo(models.ReviewImages, {foreignKey:'reviewId'})
      Reviews.belongsTo(models.User, {foreignKey:'userId'})
      Reviews.belongsTo(models.Spot, {foreignKey:'spotId'})
      // define association here
    }
  }
  Reviews.init({
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};