const express = require('express');
const { Error } = require('sequelize');
const { Spot, User, SpotImages, Reviews } = require('../../db/models');

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
    router.get(
        '/:spotId/reviews', restoreUser, async (req, res) => {
            const spotId = req.params
            if (!spotId > 300) {
                return res.json({ message: "Spot couldn't be found", statusCode: 404 })
            }
            return res.json({ message: "Spot couldn't be found", statusCode: 404 })
        });
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
                if(checkSpot === null){return res.send({ message: "Spot couldn't be found", statusCode: 404 })}
                result = checkSpot
                
                return res.json(result)
            });
            
            router.get(
            '/', async (req, res) => {
        
                const Spots = await Spot.getSpotsAll(req, res)
        
        
        
        
                return res.json(
                    Spots,
                );
            });
        
        router.post("/", restoreUser, async (req, res) => {
           const currentUser = User.currentUserId(req, res)
          const ownerId = currentUser
        const { id, address, city, state, country, lat, lng, name, description, price } = req.body;
            const spot = await Spot.create({ id, ownerId, address, city, state, country, lat, lng, name, description, price })
            
        const spots = await Spot.findByPk(ownerId)
        return res.json(spots)

    })
router.post("/:spotId/reviews", restoreUser, async (req, res) => {
    let { user } = req
    let userId = user.id
    const spotId = req.params.spotId;
    let { review, reviewsId, stars, spotsId, } = req.body;
    const spotCheck = await Spot.findByPk(spotId)
    if (!spotCheck) {
        return res.status(404).json({ message: "Spot couldn't be found", statusCode: 404 })

    }

    const check = Reviews.findByPk(userId)
    if (!check) {
        const Review = await Reviews.create({ userId, spotId, review, reviewsId, stars })
        return res.json(Review)
    }

    return res.status(403).json({ message: "User already has a review for this spot", statusCode: 403 })
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

    return res.json(result)
})
router.delete("/:spotsId", async (req, res) => {
    const ids = req.params.spotsId
    await Spot.deleteSpot(ids)

    return res.json("Successfully Deleted")
})









router.put(
    '/:spotId', async (req, res) => {
        const spot = req.params.spotId
        const { id, ownerId, address, city, state, country, lat, lng, name, description, price } = req.body

        let spots = await Spot.findByPk(spot)
        if(spots === null){
            return res.send({ message: "Spot couldn't be found", statusCode: 404 })
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


        return res.json(
            spots
        );
    });

// router.post("/api/spots", async (req, res) => {
//   const {address, city, state, country, lat, lng, name, description, price} = req.body
//   const spotId= 3
//   const spot = await Spot.create({spotId, address, city, state, country, lat, lng, name, description, price})
//   return res.json({ spot })
// } );
module.exports = router;