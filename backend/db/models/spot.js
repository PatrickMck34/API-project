'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
   
    static async createSpot({ address, city, state, country, lat, lng, name, description, price }) {
      
      const spot = await Spot.create({
        address, city, state, country, lat, lng, name, description, price
      });
      return await Spot.FindAll({})
    }
    static associate(models) {
      // define association here
    }
  }
  Spot.init({
    ownerId: {type: DataTypes.INTEGER, 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,},
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    createdAT: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Spots',
  });
  return Spot;
};