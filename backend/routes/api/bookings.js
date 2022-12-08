const express = require('express')
const { Bookings, Reviews, Spot, User, ReviewImages } = require('../../db/models');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
db = require('../../../backend/config/database')

router.get('/current',restoreUser, async (req, res)=>{
       const currentUser = User.currentUserId(req, res)
       const Booking = await Bookings.findAll({
        where: {
            userId: currentUser
        },
        // include: [{
        //     model: Spot.scope('bookingScope')
        // },]

       })
       if(Booking){
        const Bookings = Booking
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

    return res.json({message:"Successfully Deleted", statusCode: 200})
})
    router.put(
        '/:bookingId', async (req, res) => {
            const spot = req.params.bookingId
            const {startDate, endDate } = req.body
    
            let booking = await Bookings.findByPk(spot)
            if(booking === null){
                return res.status(404).send({ message: "Booking couldn't be found", statusCode: 404 })
            }
            await booking.update({startDate: startDate, endDate: endDate})
            await booking.save()
    
            return res.json(
             booking
            )})


module.exports = router;