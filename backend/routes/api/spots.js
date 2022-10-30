const express = require('express')
// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spots } = require('../../db/models');
const router = express.Router();

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

router.get('/', async (req, res) => {
      const { ownerId, address, city, state, country, lat, lng, name, description, price } = req.body
    const spot = await Spots.findAll({})
        return res.json({
          spot
        })
    } );
    router.post('/', async (req, res) => {
        const {address, city, state, country, lat, lng, name, description, price } = req.body
      const spot = await Spots.findAll({})
          return res.json({
            spot
          })
      } );
  module.exports = router;