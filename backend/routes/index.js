const express = require('express');
const router = express.Router();
const { Spot } = require('../db/models/spot')


const apiRouter = require('./api');
router.use('/api', apiRouter);
// backend/routes/index.js
// ...
// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});
router.post("/api/spots", async (req, res) => {
  const {address, city, state, country, lat, lng, name, description, price} = req.body
  const spot = await Spot.create({address, city, state, country, lat, lng, name, description, price})
  return res.json({ spot })
} );

// ...
// router.get("/api/csrf/restore", (req, res) => {
//   const csrfToken = req.csrfToken();
//   res.cookie("XSRF-TOKEN", csrfToken);
//   res.status(200).json({
//     'XSRF-Token': csrfToken
//   });
  
// });
  // router.use('/api', apiRouter);
  // ...
  module.exports = router;