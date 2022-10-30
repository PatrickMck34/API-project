const express = require('express')
// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spots } = require('../../db/models');
const router = express.Router();

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

router.get('/', (req, res) => {
      const { spots } = req;
      if (spots) {
        return res.json({
          spots
        });
      } else return res.json({});
    }
  );