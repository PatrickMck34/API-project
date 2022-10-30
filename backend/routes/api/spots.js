const express = require('express')

const { Spots } = require('../../db/models')
const router = express.Router();
// backend/routes/api/session.js
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');



router.get(
    '/',
    
    async (req, res) => {
      const { spots } = req;
      if (spots) {
        return res.json({
          spots: spots.toSafeObject()
        });
      } else return res.json({});
    }
    
  );