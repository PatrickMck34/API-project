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
router.delete("/:bookingId", async (req, res) => {
    const ids = req.params.bookingId
    const spotCheck = await Bookings.findByPk(ids)
    if(spotCheck === null){
        return res.status(404).json({ message: "Unable to find Spot", statusCode: 404 })
    }
    await Bookings.destroy({
        where:{
            id : ids
        }
    })

    return res.json("Successfully Deleted")
})


module.exports = router;