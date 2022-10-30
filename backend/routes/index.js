const express = require('express');
const router = express.Router();


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
  
  const apiRouter = require('./api');
  // router.get("/api/spots", (req, res) => {
    
    router.get('/spots', async (req, res) => {
      const { ownerId, address, city, state, country, lat, lng, name, description, price } = req.body
    const spot = await Spots.findAll({})
        return res.json({
          spot
        })
    } );
    router.post('/spots', async (req, res) => {
      const { ownerId, address, city, state, country, lat, lng, name, description, price } = req.body
    const spot = await Spots.findAll({})
        return res.json({
          spot
        })
    } );
  //   res.status(200).json({
      
  //   });

router.use('/api', apiRouter);
  // ...
  //get Spots
  // });

// router.use('/api', apiRouter);
  // ...
module.exports = router;