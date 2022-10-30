const express = require('express')

const { Spot } = require('../../db/models/spots');
const router = express.Router();
// backend/routes/api/session.js
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');



router.get(
    '/',
    restoreUser,
    (req, res) => {
      const { spot } = req;
      if (spot) {
        return res.json({
          spot: spot.toSafeObject()
        });
      } else return res.json({});
    }
  );