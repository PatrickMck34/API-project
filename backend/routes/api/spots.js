const express = require('express');
const { Error } = require('sequelize');
const { Spot, User, SpotImages, Reviews } = require('../../db/models');
// const user = require('../../db/models/user');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
// backend/routes/api/session.js
db = require('../../../backend/config/database')


router.get(
    '/current',restoreUser, async (req, res) => {
        
    //    const user = User.scope('currentUser')
    let  {user} = req;
     let id = user.id
    const spots = await Spot.findAll({
        where:{
            ownerId: id
        }
    })
   
            return res.json({
            spots
    });
    });
router.get(
    '/', async (req, res) => {
         let {spots} = req
        //   spots.previewImage = "image Url"
        // const {id, ownerId, address, city, state, country, lat, lng, name, description, price} = req.query
        const Spots = await Spot.getSpotsAll(req, res)
        
        
    
            
            return res.json(
                Spots,
            );
        });
        
        router.get(
            '/:spotId',restoreUser, async (req, res) => {
                
                const spot = req.params.spotId
                const checkSpot = await Spot.findByPk(spot)
                if(!checkSpot){
                    return res.status(404).json({message: "Spot couldn't be found"})
                }
                let {user, SpotImages} = req
            
        
                let id = user.id
                 let firstName = user.firstName
                 let lastName = user.lastName
                 let {url, preview} = req.query
                  SpotImages = [{id, url: "image url", preview: "true"}]
                 let Owner = {id, firstName, lastName}
                
              
                const spots = await Spot.findByPk(spot)
                  
           
                    return res.json({
                    spots,Owner,SpotImages
                    });
            });
                
        router.post("/",restoreUser, async (req, res) => {
            let {user} = req;
            let ownerId = user.id
            let {id, address, city, state, country, lat, lng, name, description, price} = req.body;
            const spot = await Spot.create({id, ownerId, address, city, state, country, lat, lng, name, description, price})
            id = spot.id
            createdAt = spot.createdAt
            updatedAt = spot.updatedAt
           const spots = {id, ownerId, address, city, state, country, lat, lng, name, description, price, createdAt, updatedAt}
return res.json(spots)
    
})
router.post("/:spotId/reviews",restoreUser, async (req, res) =>{
    let {user} = req
    let userId = user.id
      const spotId = req.params.spotId;
      let {review, stars, spotsId,} = req.body;
      const spotCheck = await Spot.findByPk(spotId)
      if(!spotCheck){
        return res.status(404).json({message: "Spot couldn't be found", statusCode: 404})

      }
      
     const check = Reviews.findByPk(userId)
      if(check){
      const Review = await Reviews.create({userId, spotId, review,  stars})
      return res.json(Review)
      }
      
     return res.status(403).json({message: "User already has a review for this spot", statusCode: 403})
})
router.post("/:spotId/images", restoreUser, async (req, res) => {
    const spotId = req.params.spotId
    const spotCheck = await Spot.findByPk(spotId)
      if(!spotCheck){
        return res.status(404).json({message: "Spot couldn't be found", statusCode: 404})

      }
   
    let { url, preview} = req.body
     
    let spots = await SpotImages.create({
        url, preview, spotId
    })
      
    //  spots.url = url
    //  spots.preview = preview
     id = spots.id
      let result = {id, url, preview, }
    //  ids = spots.id
    //  prev = spots.preview
    //  usl = spots.url
     
  return res.json(result)
})
router.delete("/:spotsId", async (req, res) => {
    const ids = req.params.spotsId
     await Spot.deleteSpot(ids)
       
       return res.json("Successfully Deleted")
        })
    

     
             
   




router.put(
    '/:spotId', async (req, res) => {
        const spot = req.params.spotId
        const { id, ownerId, address, city, state, country, lat, lng, name, description, price} = req.body
      
        let spots = await Spot.findByPk(spot)
            await spots.update({address: address,city: city, state: state, country: country, lat: lat, lng: lng, name: name, description: description, price: price})
            spots.ownerId = ownerId
            spots.address = address
            spots.city = city
            spots.state = state
            spots.country = country
            spots.lat = lat
            spots.lng = lng
            spots.name = name
            spots.description = description
            spots.price = price
            
   
            return res.json(
            spots
            );
    });

    // router.post("/api/spots", async (req, res) => {
//   const {address, city, state, country, lat, lng, name, description, price} = req.body
//   const spotId= 3
//   const spot = await Spot.create({spotId, address, city, state, country, lat, lng, name, description, price})
//   return res.json({ spot })
// } );
  module.exports = router;