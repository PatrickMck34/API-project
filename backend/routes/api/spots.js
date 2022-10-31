const express = require('express')
const { Spot } = require('../../db/models');
const router = express.Router();

// backend/routes/api/session.js

router.get(
    '/:spotId', async (req, res) => {
        const spotId = req.params.id;
        const{id, ownersId, address, city, state, country, lat, lng, name, description, price} = req.query
        const spots = await Spot.findByPk(1)
            
   
            return res.json({
            spots,
            });
    });
const where = {};
router.get(
    '/', async (req, res) => {
        const {id, ownersId, address, city, state, country, lat, lng, name, description, price} = req.query
        const spots = await Spot.findAll({
            id, ownersId, address, city, state, country, lat, lng, name, description, price})
            
            
            return res.json({
                spots,
            });
        });

    router.post("/", async (req, res) => {
const {id, ownersId, address, city, state, country, lat, lng, name, description, price} = req.query;
  const spot = await Spot.create({id, ownersId, address, city, state, country, lat, lng, name, description, price})
  
     
return res.json({spot})
    
})

    // router.post("/api/spots", async (req, res) => {
//   const {address, city, state, country, lat, lng, name, description, price} = req.body
//   const spotId= 3
//   const spot = await Spot.create({spotId, address, city, state, country, lat, lng, name, description, price})
//   return res.json({ spot })
// } );
  module.exports = router;