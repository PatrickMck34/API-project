const express = require('express')
const { Spot } = require('../../db/models');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
// backend/routes/api/session.js


router.get(
    '/current', restoreUser, async (req, res) => {
        let  {user} = req;
         const ids = user.id
         
        const spots = await Spot.findByPk(ids)
            
   
            return res.json({
            spots,
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
            '/:spotsId', async (req, res) => {
                // const {id, ownersId, address, city, state, country, lat, lng, name, description, price} = req.query
                
                const spots = await Spot.findByPk(req.params.spotsId, {
                    id, ownersId, address, city, state, country, lat, lng, name, description, price})
                    
                    
                    return res.json({
                        spots,
                    });
                });
                
        router.post("/", async (req, res) => {
            const { id, ownerId, address, city, state, country, lat, lng, name, description, price} = req.body;
            const spot = await Spot.create({id, ownerId, address, city, state, country, lat, lng, name, description, price})
            
     
return res.json({spot})
    
})

    // router.post("/api/spots", async (req, res) => {
//   const {address, city, state, country, lat, lng, name, description, price} = req.body
//   const spotId= 3
//   const spot = await Spot.create({spotId, address, city, state, country, lat, lng, name, description, price})
//   return res.json({ spot })
// } );
  module.exports = router;