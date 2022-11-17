const express = require('express')
const { Spot, User, SpotImages } = require('../../db/models');
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
         let {spot} = req
        //  return res.json({spots: spots})
        // const {id, ownerId, address, city, state, country, lat, lng, name, description, price} = req.query
        const spots = await Spot.getSpotsAll(req, res)
            
            
            
            return res.json(
                spots,
            );
        });
        
        router.get(
            '/:spotId',restoreUser, async (req, res) => {
                const spot = req.params.spotId
                let {user} = req
                let id = user.id
                 let firstName = user.firstName
                 let lastName = user.lastName
                 let {url, preview} =req.body
                 let SpotsImages = {id, url, preview}
                 let Owner = {id, firstName, lastName}
                
              
                const spots = await Spot.findByPk(spot)
                  
           
                    return res.json({
                    spots,Owner,SpotsImages
                    });
            });
                
        router.post("/",restoreUser, async (req, res) => {
            let {user} = req;
            let ownerId = user.id
            let { address, city, state, country, lat, lng, name, description, price} = req.body;
            const spot = await Spot.create({id, ownerId, address, city, state, country, lat, lng, name, description, price})
            
     
return res.json(spot)
    
})
router.post("/:spotId/images", restoreUser, async (req, res) => {
    const spotId = req.params.spotId
    let { url, preview} = req.body
    let spots = await SpotImages.create({
         url, preview
    })
    //  spots.url = url
    //  spots.preview = preview
    //  spots.id = id
    //  ids = spots.id
    //  prev = spots.preview
    //  usl = spots.url
     
  return res.json(spots)
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