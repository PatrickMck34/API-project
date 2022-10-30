'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
   
    static async creatNewSpot({
          address, city, state, country, lat, lng, name, description, price}) {
              const spot = await Spot.create({
                address, city, state, country, lat, lng, name, description, price
              });
              return spot
            }
     static getSpots() {
      const spot = Spot.findAll({})
      return {spot}
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
    address: {type: DataTypes.STRING,
    }, 
    city: {type:DataTypes.STRING,
    },
    state: {type: DataTypes.STRING,
    },
    country: {type: DataTypes.STRING,
    },
    lat: {type: DataTypes.DECIMAL,
    },
    lng: {type: DataTypes.DECIMAL,
    },
    name: {type:DataTypes.STRING,
    },
    description: {type: DataTypes.STRING, 
    },
    price: {type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      
    }
  }, {
    sequelize,
    modelName: 'Spots',
  });
  return Spot;
};