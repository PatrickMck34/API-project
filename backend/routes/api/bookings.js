const express = require('express')
const { Booking, Reviews, Spot, User, ReviewImages } = require('../../db/models');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
db = require('../../../backend/config/database')

router.get('/current',restoreUser, async (req, res)=>{
       const currentUser = User.currentUserId(req, res)
       const Bookings = await Booking.findAll({
        where: {
            userId: currentUser
        },
        include: [{
            model: Spot.scope('bookingScope')
        },]

       })
       return res.json({Bookings})
       
})
router.delete("/:bookingId", async (req, res) => {
    const ids = req.params.bookingId
    const spotCheck = await Booking.findByPk(ids)
    if(spotCheck === null){
        return res.status(404).json({ message: "Unable to find Spot", statusCode: 404 })
    }
    await Booking.destroy({
        where:{
            id : ids
        }
    })

    return res.json({message:"Successfully Deleted", statusCode: 200})
})
    router.put(
        '/:bookingId', async (req, res) => {
            const spot = req.params.bookingId
            const {startDate, endDate } = req.body
    
            let spots = await Booking.findByPk(spot)
            if(spots === null){
                return res.status(404).send({ message: "Booking couldn't be found", statusCode: 404 })
            }
            await spots.update({startDate: startDate, endDate: endDate})
            // spots = review
            
    
            const result = await Booking.findByPk(spot)
    
    
            return res.json(
               result
            )})


module.exports = router;