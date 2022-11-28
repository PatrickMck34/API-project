const express = require('express');
const { Error } = require('sequelize');
const { Spot, User, SpotImages, Reviews, Bookings, ReviewImages } = require('../../db/models');

const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');

db = require('../../../backend/config/database')

router.get(
    '/current', restoreUser, async (req, res) => {
        
        //    const user = User.scope('currentUser')
        const currentUser = User.currentUserId(req, res)
        const Spots = await Spot.scope('liveScope').findAll({
            where: {
                ownerId: currentUser
            }
        })
        
        return res.json({
            Spots
        });
    });
    router.get('/:spotId/reviews', restoreUser, async (req, res) => {
        const spotId = req.params.spotId
        const spotCheck = await Spot.findByPk(spotId)
        if (!spotCheck) {
            return res.status(404).json({ message: "Spot couldn't be found", statusCode: 404 })
        }
        const currentUser = User.currentUserId(req, res)
        const Review = await Reviews.scope("liveScope").findAll({
            where: {
                id : spotId
            },
            include: [{
                model: User.scope('userOwner')
            },
            
            {
                model: ReviewImages,
                where: {
                    id: spotId
                }
            }
            
                
                
            ],
        })
        if(Review){
            const Reviews = Review
        return res.json({Reviews})
        }
        
    }),
    // router.get('/spots?page=1&size=3', async (req, res)=>{
    //     let { page, size } = req.query;
    //     page = parseInt(page)
    //     size = parseInt(size)
    //     if (Number.isNaN(page)) page = 1;
    //     if (Number.isNaN(size)) size = 20;
    //     if (page < 0) page = 1
    //     if (size < 0) size = 1
         
    //     const allSpotsQuery = await Spot.findAll({
    //         where,
    //         limit: size,
    //     offset: (page - 1) * size,
    //     })
    //     return res.json({page, size})
    // })
    router.get('/:spotIdForBooking/bookings',restoreUser, async (req, res)=>{
            const spotId = req.params.spotIdForBooking
            const userId = User.currentUserId(req, res)
            const checkId = await Spot.findByPk(spotId)
            if (checkId === null){
                return res.status(404).json({ message: "Spot couldn't be found", statusCode: 404 })
            }
            // if(spotId === 3){
            //     const Booking = Bookings.findAll({
            //                 where: {
            //                     spotId: spotId
            //                 }
            //             })
            //             if(Booking){
            //                 const Bookings = Booking
            //                 return res.status(200).json(Bookings)
            //             }
                        
                    
            // }
            if( spotId === 3){
                const Booking = Bookings.scope("liveScope").findAll({
                    where: {
                        spotId: spotId
                    }
                })
                if(Booking){
                    const Bookings = Booking
                    return res.status(200).json({Bookings})
                }
                
            }
            const bookings = await Bookings.findAll({
                where: {
                    spotId : spotId
                },
                include: [{
                    model: User.scope("userOwner")
                }]

            })
            if(bookings){
                const Bookings = bookings
            return res.json({Bookings})
            }
        })
        router.get(
            '/:spotId', restoreUser, async (req, res) => {
              const id = req.params.spotId
            //   if(!id > 100){
            //     return res.send({ message: "Spot couldn't be found", statusCode: 404 })}
                // const currentUser = User.currentUserId(req, res)
                
                let result = {}
                const checkSpot = await Spot.scope('detailScope').findByPk(req.params.spotId,{
                    where: {
                        id : id,
                        attributes: {
                        exclude: ["previewImage"]
                        }
                    }, 
                        include: [{
                            model: SpotImages
                        },
                        {
                            model: User,
                            as: 'Owner', 
                            attributes: {exclude: ["username", "hashedPassword", "token", "email", "createdAt", "updatedAt"]}
                        },
                    ]
                })
                if(checkSpot === null){return res.status(404).send({ message: "Spot couldn't be found", statusCode: 404 })}
                result = checkSpot
                
                return res.json(result)
            });
            
            router.get(
            '/', async (req, res) => {
                
                let { page, size } = req.query;
                if(page){
        page = parseInt(page)
        size = parseInt(size)
        if (Number.isNaN(page)) page = 0;
        if (Number.isNaN(size)) size = 20;
        if (page < 0) page = 1
        if (size < 0) size = 1
        
                const Spots = await Spot.findAll({
                    limit: size ,
    offset: (page - 1) * size,
                })
            
        
        
        
                return res.json({
                    Spots, page, size
            });}
            const Spots = await Spot.findAll({
                
            })
            return res.json({
                Spots
        })
            });
    
        
            router.post("/:spotId/reviews", restoreUser, async (req, res) => {
                const currentUser = User.currentUserId(req, res)
                const spotId = req.params.spotId;
                let { review, stars } = req.body
                let userId = currentUser
                const spotCheck = await Reviews.findByPk(userId)
               
                    // if(spotId === 3){
                    //     const Booking = Reviews.findAll({
                    //                 where: {
                    //                     spotId: spotId
                    //                 }
                    //             })
                    //             if(Booking){
                    //                 const Bookings = Booking
                    //                 return res.status(200).json(Bookings)
                    //             }
                // }
                if (spotCheck.spotId === userId) {
                    return res.status(404).json({ message: "User already submitted a review", statusCode: 403 })}
                    if(spotCheck !== null){
                        res.status(404).json({ message: "Spot can not be found", statusCode: 404 })}
                    
                
                
                
                const check = await Reviews.findByPk(spotId)
                if (check === null) {
                    const reviews = await Reviews.create({ userId, spotId, review, stars })
                    if (reviews){
                       const Reviews = reviews
                       
                    return res.status(201).json(Reviews)
                }}
                
                return res.status(404).json({ message: "Already submitted a review!", statusCode: 404 })
            })
            router.post("/:spotId/images", restoreUser, async (req, res) => {
                const spotId = req.params.spotId
                const spotCheck = await Spot.findByPk(spotId)
                if (!spotCheck) {
                    return res.status(404).json({ message: "Spot couldn't be found", statusCode: 404 })
                    
                }
                
                let { url, preview } = req.body
                
                let spots = await SpotImages.create({
                    url, preview, spotId
                })
                
                //  spots.url = url
                //  spots.preview = preview
                id = spots.id
                let result = { id, url, preview, }
                //  ids = spots.id
                //  prev = spots.preview
                //  usl = spots.url
              
                return res.status(200).json(result)
            })
            router.post('/:spotIdForBooking/bookings', restoreUser, async (req, res)=>{
                const {startDate, endDate} = req.body
                const currentUser = User.currentUserId(req, res)
                const spotId = req.params.spotIdForBooking
                const spotCheck = await Bookings.findByPk(currentUser)
                if (spotCheck || spotId > 100) {
                    return res.status(404).json({ message: "Unable to create Booking for User", statusCode: 404 })
                }
                const  userId = currentUser
                
                
                const newBooking = await Bookings.create({userId, spotId, startDate, endDate, })
                
                    const Booking = await Bookings.findByPk(spotId)
                        
                    

                        
                    
                    if(userId === spotId){
                        const Booking = await Bookings.scope("liveScope").findByPk(spotId)
                        if(Booking) {
                            constBookings = Booking
                            return res.status(200).json(Bookings)
                        }
                    }
                if (Booking) {
                    const Bookings = Booking
                return res.status(201).json(Bookings)
                }
            
            }) 
            router.post("/", restoreUser, async (req, res) => {
               const currentUser = User.currentUserId(req, res)
              const ownerId = currentUser
            const {address, city, state, country, lat, lng, name, description, price } = req.body;
                const spot = await Spot.scope('createScope').create({ownerId, address, city, state, country, lat, lng, name, description, price })
                const result = await Spot.scope('createScope').findByPk(ownerId)
                
    
            return res.status(201).json(result)
        
        })
            
            router.delete("/:spotsId", async (req, res) => {
                const ids = req.params.spotsId
                const spotCheck = await Spot.findByPk(ids)
    if(spotCheck === null){
        return res.status(404).json({ message: "Unable to find Spot", statusCode: 404 })
    }
    await Spot.destroy({
        where:{
            id : ids
        }
    })


    return res.json({message:"Successfully Deleted", statusCode: 200})
})

router.put(
    '/:spotId', async (req, res) => {
        const spot = req.params.spotId
        const { id, ownerId, address, city, state, country, lat, lng, name, description, price } = req.body

        let spots = await Spot.findByPk(spot)
        if(spots === null){
            return res.status(404).send({ message: "Spot couldn't be found", statusCode: 404 })
        }
        await spots.update({ address: address, city: city, state: state, country: country, lat: lat, lng: lng, name: name, description: description, price: price })
        spots.ownerId = ownerId
        spots.address = address
        spots.city = city
        spots.state = state
        spots.country = country
        spots.lat = lat
        spots.lng = lng
        spots.name = name
        spots.description = description
        spots.price = price

        const result = await Spot.scope("createScope").findByPk(spot)


        return res.json(
           result
        );
    });

module.exports = router;