const express = require('express')
const { Spot } = require('../../db/models/spot.js');
const router = express.Router();
const {getSpots} = require('../../db/models/spot.js')
// backend/routes/api/session.js


// router.get(
//     '/', async (req, res) => {
//         const spot = req
//         return res.json({
//             spot
//             })
//     } );
    router.post("/", async (req, res) => {
  const {address, city, state, country, lat, lng, name, description, price} = req.body
  const newSpot = await Spot.createNewSpot(address, city, state, country, lat, lng, name, description, price)

return res.json({newSpot})
    
})

    // router.post(
    //     // router.post(
    // '/', async (req, res) => {
    //     const {address, city, state, country, lat, lng, name, description, price} = req.body
    //     const spot = await Spot.create({address, city, state, country, lat, lng, name, description, price})
    //     return res.json({ spot })
    // } );
  module.exports = router;