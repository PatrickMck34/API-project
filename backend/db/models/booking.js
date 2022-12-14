'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookings.belongsTo(models.Spot, {foreignKey:'spotId'})
      Bookings.belongsTo(models.User, {foreignKey:'userId'})
    }
  }
  Bookings.init({
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bookings',
    defaultScope: {
      attributes: {
        
      }
    },
    scopes: {
      liveScope: {
        attributes: {
          exclude: ["userId", "id", "createdAt", "updatedAt"]
         
        }
      },}
  });
  return Bookings;
};