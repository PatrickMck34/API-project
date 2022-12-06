'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SpotImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SpotImages.belongsTo(models.Spot, {foreignKey:'spotId'})
      // SpotImages.belongsTo(models.User, {through: models.Spot, foreignKey:'spotId'})
      // define association here
    }
  }
  SpotImages.init({
    spotId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    preview: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SpotImages',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt", "spotId"]
      }
    },
  });
  return SpotImages;
};