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
      let {id, ownerId, address, city, state, country, lat, lng, name, description, price, previewImage} = req.query
        const Spots = await Spot.findAll({
            id, ownerId, address, city, state, country, lat, lng, name, description, price, previewImage})
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
    Spot.belongsTo(models.User, {as: 'Owner', foreignKey: 'ownerId' })
    Spot.hasMany(models.SpotImages, {foreignKey:'spotId'})
    Spot.hasMany(models.Reviews, {foreignKey:'spotId'})
    Spot.hasMany(models.Bookings, {foreignKey:'spotId'})
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
    },
      previewImage: {type: DataTypes.STRING,
      
      },
      avgStarRating: {type: DataTypes.DECIMAL,
      },
      numReviews: {type: DataTypes.INTEGER,
      },
  
      url: {type: DataTypes.STRING},
      

  }, {
    sequelize,
    modelName: 'Spot',
    defaultScope: {
      attributes: {
        exclude: ["url", "numReviews", "avgStarRating"]
      }
    },
    scopes: {
    liveScope: {
      attributes: {
        exclude: ["url", "avgStarRating", "numReviews"]
      }
    },
    detailScope: {
      attributes: {
        exclude: ["url", "avgRating", "previewImage"]
      }
    },
    createScope: {
      attributes: {
        exclude: ["url", "avgRating", "previewImage", "avgStarRating", "numReviews"]
      }
    },
    bookingScope: {
      attributes: {
        exclude: ["url", "avgRating", "avgStarRating", "numReviews", "createdAt", "updatedAt", "description"]
      }
    },
  
  reviewScope: {
    attributes: {
      exclude: ["url", "avgRating", "numReviews", "avgStarRating", "description", "createdAt", "updatedAt"]
    }
  }
  },
  }
);
  return Spot;
};