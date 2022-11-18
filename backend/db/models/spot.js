'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {

   static async deleteSpot(spotId) {
       return await Spot.destroy({
        where: {
          id: spotId,}
      });
    }
      static async getSpotsAll(req){
      let {id, ownersId, address, city, state, country, lat, lng, name, description, price, previewImage} = req.query
        const Spots = await Spot.findAll({
            id, ownersId, address, city, state, country, lat, lng, name, description, price, previewImage})
             Spots.previewImage = "image url"
            
            return ({Spots})
          }
          
          
   
    // static async CreatNewSpot({
    //       id, ownerId, address, city, state, country, lat, lng, name, description, price}) {
    //           const spot = await Spot.create({
    //              id, ownerId, address, city, state, country, lat, lng, name, description, price
    //           });
    //           return await Spot.findByPk(spot.id);
            

    //  static getSpots() {
    //   const spot = Spot.findByPk(spot.id)
    //   return {spot}
    //  }
     
     
          
    
    static associate(models) {
    Spot.belongsTo(models.User, { foreignKey: 'ownerId' })
    }
  }
  Spot.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ownerId: {type: DataTypes.INTEGER, 
     
      
    },
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
      
    },
    avgRating: {type: DataTypes.DECIMAL,
      defaultValue: 4.5
    },
      previewImage: {type: DataTypes.STRING,
      defaultValue: "image url"
      },
  
      url: {type: DataTypes.STRING, defaultValue: 'image url'},
  }, {
    sequelize,
    modelName: 'Spot',
    defaultScope: {
      attributes: {
        exclude: ["url"]
      }
    },
  });
  return Spot;
};