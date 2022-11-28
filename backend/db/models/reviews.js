'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    
    static associate(models) {
      Reviews.hasMany(models.ReviewImages, {foreignKey: 'reviewId'})
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      
    },
  }, {
    sequelize,
    modelName: 'Reviews',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
    scopes: {
      liveScope: {
        attributes: {
         
        }
      },}
  });
  return Reviews;
};