const express = require('express')
const { Spot } = require('../../db/models');
const router = express.Router();
// backend/routes/api/session.js


// router.get(
//     '/', async (req, res) => {
//         const spot = req
//         return res.json({
//             spot
//             })
//     } );
    // router.post(
    //     '/',
    //   async (req, res) => {
    //     const { address, city, state, country, lat, lng, name, description, price } = req.body;
    //     const spots = await Spot.create({ address, city, state, country, lat, lng, name, description, price});
    //     res.status(200)
    //    return res.json({
    //     spots
    //    })
    router.post(
        // router.post(
    '/', async (req, res) => {
        const {address, city, state, country, lat, lng, name, description, price} = req.body
        const spot = await Spot.createSpot({address, city, state, country, lat, lng, name, description, price})
        return res.json({ spot })
    } );
  module.exports = router;