const express = require('express')
const { Spot, User } = require('../../db/models');
// const user = require('../../db/models/user');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
// backend/routes/api/session.js
db = require('../../../backend/config/database')


router.get(
    '/current', restoreUser, async (req, res) => {
        
    //    const user = User.scope('currentUser')
    let  {user} = req;
    const id = user.id
    const spots = await Spot.findByPk(user.id)
   
            return res.json({
            spots
            });
    });
router.get(
    '/', async (req, res) => {
        const {id, ownersId, address, city, state, country, lat, lng, name, description, price} = req.query
        const spots = await Spot.findAll({
            id, ownersId, address, city, state, country, lat, lng, name, description, price})
            
            
            return res.json({
                spots,
            });
        });
        
        router.get(
            '/:spotId', async (req, res) => {
                const spot = req.params.spotId
                       
              
                const spots = await Spot.findByPk(spot)
                  
           
                    return res.json({
                    spots,
                    });
            });
                
        router.post("/", async (req, res) => {
            const ids = User.id
            const { id, ownerId, address, city, state, country, lat, lng, name, description, price} = req.body;
            const spot = await Spot.create({id, ownerId, address, city, state, country, lat, lng, name, description, price})
            
     
return res.json({spot})
    
})
router.post("/:spotId/images", restoreUser, async (req, res) => {
    const spot = req.params.spotId
    const {id, url, preview} = req.body
    const spots = await Spot.findByPk(spot)
     spots.url = url
     spots.preview = preview
     spots.id = id
  return res.json({id, url, preview})
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
            spots.id = id
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
   
            return res.json({
            spots
            });
    });

    // router.post("/api/spots", async (req, res) => {
//   const {address, city, state, country, lat, lng, name, description, price} = req.body
//   const spotId= 3
//   const spot = await Spot.create({spotId, address, city, state, country, lat, lng, name, description, price})
//   return res.json({ spot })
// } );
  module.exports = router;