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
        const {address, city, state, country, lat, lng, name, description, price } = req.body;
            const spot = await Spot.create({ ownerId, address, city, state, country, lat, lng, name, description, price })
            

        return res.json(spot)

    })
router.post("/:spotId/reviews", restoreUser, async (req, res) => {
    const spotId = req.params.spotId;
    let { review, stars } = req.body
    if (spotId > 300) {
        return res.status(404).json({ message: "Spot couldn't be found", statusCode: 404 })

    }

    const check = await Reviews.findByPk(spotId)
    if (check === null) {
        const reviews = await Reviews.create({ spotId, review, stars })
        return res.json(review)
    }

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

    return res.json(result)
})
// router.delete("/spot-images/:spotId", async (req, res) => {
//     const ids = req.params.spotImageId
//     await SpotImages.deleteSpotImages(ids)

//     return res.json("Successfully Deleted")
// })
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

module.exports = router;