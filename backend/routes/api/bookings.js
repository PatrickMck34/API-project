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
            userId: currentUser
        },
        include: [{
            model: Spot.scope('bookingScope')
        },]

       })
       if(bookings){
        const Bookings = bookings
       return res.json({Bookings})
       }
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
    router.put(
        '/:bookingId', async (req, res) => {
            const spot = req.params.bookingId
            const {startDate, endDate } = req.body
    
            let spots = await Bookings.findByPk(spot)
            if(spots === null){
                return res.send({ message: "Booking couldn't be found", statusCode: 404 })
            }
            await spots.update({startDate: startDate, endDate: endDate})
            // spots = review
            
    
            const result = await Bookings.findByPk(spot)
    
    
            return res.json(
               result
            )})


module.exports = router;