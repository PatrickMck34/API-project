const express = require('express');
const { emptyQuery } = require('pg-protocol/dist/messages');
const { Error } = require('sequelize');
const { Spot, User, SpotImages, Reviews, Bookings, ReviewImages } = require('../../db/models');

const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');

db = require('../../../backend/config/database')

router.get(
    '/current', restoreUser, async (req, res) => {
        
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
        const Review = await Reviews.scope("liveScope").findAll({
            where: {
                spotId : spotId
            },
            include: [{
                model: User.scope('userOwner'),
                // as: "Owner"
            },
            {
                model: ReviewImages,
                
                    
                
                
            }       
            ],
        })
        if(Review){
           const Reviews = Review
        return res.json({Reviews})
        }
    }),
    router.get('/:spotIdForBooking/bookings',restoreUser, async (req, res)=>{
            const spotId = req.params.spotIdForBooking
            const checkId = await Spot.findByPk(spotId)
            if (checkId === null){
                return res.status(404).json({ message: "Spot couldn't be found", statusCode: 404 })
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
                return res.status(200).json({Bookings})
              }
            })
        router.get(
            '/:spotId', restoreUser, async (req, res) => {
                const id = req.params.spotId            
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
                const userId = currentUser
           
                     const spotCheck = await Spot.findOne({where:{
                        id : spotId
                     }})
                        
                    
                    console.log(spotCheck)
                   
                    const userSpotCheck = await Reviews.findOne({
                        where:{
                            userId : userId,
                            spotId : spotId
                        }
                    }) 
                   
                        console.log(userSpotCheck)
                        if (userSpotCheck !== null ){
                           return  res.status(404).json({ message: "Already submitted a Review", statusCode: 404 })}
                            console.log(userSpotCheck)
            
                     if(spotCheck !== null){
                         const reviews = await Reviews.create({ userId, spotId, review, stars })
                         await reviews.save()
                         if (reviews){
                            const Reviews = reviews
                             return res.status(200).json(Reviews)
                     }
                     }
                     return res.status(404).json({ message: "Spot doesnt exist", statusCode: 404 })
                    })
            router.post("/:spotId/images", restoreUser, async (req, res) => {
                const spotId = req.params.spotId
                const spotCheck = await Spot.findByPk(spotId)
                if (!spotCheck) {
                    return res.status(404).json({ message: "Spot couldn't be found", statusCode: 404 })
                    
                }
                
                let { url, preview } = req.body
                
                const spots = await SpotImages.scope('defaultScope').create({
                    url, preview, spotId
                })
            
                await spots.save()
                return res.status(200).json(spots)
            })
            router.post('/:spotIdForBooking/bookings', restoreUser, async (req, res)=>{
                const {startDate, endDate} = req.body
                const start = new Date(startDate)
                const end = new Date(endDate)
                const currentUser = User.currentUserId(req, res)
                const userId = currentUser
                const spotId = req.params.spotIdForBooking
                const spotCheck = await Spot.findOne({
                    where:{
                        id:spotId
                    }
                })
                if (spotCheck === null){
                    return res.status(403).json({ message: "Spot doesnt Exist!" })
                }
                
                
                const {Op} = require("sequelize")

                const endCheck = await Bookings.findOne({
                    where:{
                       startDate : {
                           [Op.lte]: new Date(start),
                       
                        [Op.lte]: new Date(end)
                        // } 
                    
                       },
                    
                       endDate : {
                           [Op.gte]: new Date(start),
                         
                        [Op.lte]: new Date(end) 
                        
                       }
                    }
                })
                const startCheck = await Bookings.findOne({
                    where:{
                       startDate : {
                           [Op.gte]: new Date(start),
                       
                        [Op.lte]: new Date(end)
                        // } 
                    
                       },
                    
                       endDate : {
                           [Op.gte]: new Date(start),
                         
                        [Op.gte]: new Date(end) 
                        
                       }
                    }
                })
                const bookingCheck = await Spot.findOne({
                    where:{
                       id : spotId
                    }
                })
            
                if (startCheck !== null || endCheck !== null){
                    return res.status(403).json({ message: "Sorry, this spot is already booked for the specified dates", statusCode: 403, "errors": {
                        startDate: "conflicts with existing booking", endDate: "conflicts with existing booking" }})
                    }
                if (bookingCheck === null){
                    return res.status(403).json({ message: "Spot couldn't be found" })
                    }
    
                            const newBooking = await Bookings.create({userId, spotId, startDate, endDate, })
                            await newBooking.save()
                            return res.status(201).json(newBooking)
                
            
            }) 
            router.post("/", restoreUser, async (req, res) => {
               const currentUser = User.currentUserId(req, res)
              const ownerId = currentUser
            const {address, city, state, country, lat, lng, name, description, price, previewImage } = req.body;
                const spot = await Spot.scope("createScope").create({ownerId, address, city, state, country, lat, lng, name, description, price, previewImage })
                createdAt = spot.createdAt
                updatedAt = spot.updatedAt
                id = spot.id
               await spot.save()
               spots = {id,  ownerId, address, city, state, country, lat, lng, name, description, price, createdAt, updatedAt}
    
            return res.status(201).json(spots)
        
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
        // spots.ownerId = ownerId
        // spots.address = address
        // spots.city = city
        // spots.state = state
        // spots.country = country
        // spots.lat = lat
        // spots.lng = lng
        // spots.name = name
        // spots.description = description
        // spots.price = price
       spots.save()
      
        return res.json(
           spots
        );
    });

module.exports = router;