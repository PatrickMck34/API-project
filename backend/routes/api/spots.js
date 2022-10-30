const express = require('express')
const { Spot } = require('../../db/models');
const router = express.Router();

// backend/routes/api/session.js

const where = {};
router.get(
    '/', async (req, res) => {
        const spot = await Spot.findAll({
            where,
        });
            return res.json({
            spot,
            });
    });
    router.post("/", async (req, res) => {
  const spot = req.body;
  
     
return res.json({spot})
    
})

    // router.post("/api/spots", async (req, res) => {
//   const {address, city, state, country, lat, lng, name, description, price} = req.body
//   const spotId= 3
//   const spot = await Spot.create({spotId, address, city, state, country, lat, lng, name, description, price})
//   return res.json({ spot })
// } );
  module.exports = router;