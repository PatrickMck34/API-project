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
    
    
  //   res.status(200).json({
      
  //   });

router.use('/api', apiRouter);
  // ...
  //get Spots
  // });

// router.use('/api', apiRouter);
  // ...
module.exports = router;