const express = require('express')
const { Reviews, Spot, User } = require('../../db/models');
// const user = require('../../db/models/user');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
// backend/routes/api/session.js
db = require('../../../backend/config/database')

router.get('/current', async (req, res)=>{
    const reviews = await Reviews.getReviewsAll(req, res)
    return res.json({reviews})
})

module.exports = router;