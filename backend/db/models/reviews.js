'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static async getReviewsAll(req){
      const {spotId, userId, review, stars} = req.query
        const reviews = await Reviews.findByPk(spotId)
            
            
            return (reviews)
          }
    static associate(models) {
      Reviews.belongsTo(models.Reviews, {foreignKey:'ownerId'})
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