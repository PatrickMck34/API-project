const express = require('express')
const { Bookings, Reviews, Spot, User, ReviewImages } = require('../../db/models');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
db = require('../../../backend/config/database')

router.get('/current',restoreUser, async (req, res)=>{
       const currentUser = User.currentUserId(req, res)
       let resu = {}
       const bookings = await Bookings.findAll({
        where: {
            userid: currentUser
        },
        include: [{
            model: Spot.scope('bookingScope')
        },]

       })
       return res.json({bookings})
})


module.exports = router;