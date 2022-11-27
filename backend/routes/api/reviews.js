const express = require('express')
const { Reviews, Spot, User, ReviewImages } = require('../../db/models');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');

db = require('../../../backend/config/database')

router.get('/current',restoreUser, async (req, res)=>{
    const userId = User.currentUserId(req, res)
   
    const Rev = await Reviews.findAll({
        where: {
             userId: 3
            },
            include: [{
                model: User.scope('userOwner')
            },
            {
                model: Spot.scope("reviewScope")
            },
            {
                model: ReviewImages
                
                }
            
    
],
})
let reviewId = 4
const revImages = await ReviewImages.findAll({
    where: {
        id: 4
    }
})

return res.json(Rev)
        

}),


router.post('/:reviewId/images', restoreUser, async (req, res)=>{
    const reviewId = req.params.reviewId
   let  url = req.body.url
    if(reviewId > 300){
        return res.status(404).json({ message: "Review couldn't be found", statusCode: 404 })
    }
    // const checkReviewId = await Reviews.findByPk(reviewId.reviewId)
    // const urlImage = req.body
     text = url
    const newImage = await ReviewImages.create(text)
    const id = newImage.id
    
     const resu = {id, url}
    const result = await ReviewImages.scope("defaultScope").findByPk(reviewId.reviewId)
    
    
    return res.json(resu)
    
})
router.delete('/:reviewId', async (req, res)=>{
    const reviewId = req.params.reviewId
    const spotCheck = await Reviews.findByPk(reviewId)
    if(spotCheck === null){
        return res.status(404).json({ message: "Unable to find Review", statusCode: 404 })
    }
    const delReview = Reviews.destroy({
        where: {
            id :reviewId
        }
    })
    return res.json('Success')
}),

router.put(
    '/:reviewId', async (req, res) => {
        const spot = req.params.reviewId
        const { review } = req.body

        let spots = await Reviews.findByPk(spot)
        if(spots === null){
            return res.send({ message: "Review couldn't be found", statusCode: 404 })
        }
        await spots.update({ review: review})
        spots.review = review
        

        const result = await Reviews.findByPk(spot)


        return res.json(
           result
        )})

module.exports = router;