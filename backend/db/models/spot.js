'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {

   static async deleteTree(spotId) {
       return await Tree.destroy({
        where: {
          id: spotId,}
      });
    }
      static async getTreesAll(req){
      let {id, number, location, forSurvivor, message} = req.query
        const Trees = await Tree.findAll({
            id, number, location, message, forSurvivor})
             
            
            return ({Trees})
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
 
   

    }
  }
  Tree.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    number:{type:DataTypes.INTEGER},
    location:{type:DataTypes.STRING},
    forSurvivor:{type:DataTypes.BOOLEAN},
    message:{type:DataTypes.STRING},
   
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,},
    },{
    sequelize,
    modelName: 'Tree',
    defaultScope: {
      
      }
    },
   
);
  return Tree;
};