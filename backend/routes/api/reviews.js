const express = require('express')
const { Reviews, Spot, User, ReviewImages } = require('../../db/models');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');

db = require('../../../backend/config/database')

router.get('/current',restoreUser, async (req, res)=>{
    const userId = User.currentUserId(req, res)
   
    let Review = await Reviews.scope("liveScope").findAll({
        where: {
            id: userId
            },
            include: [{
                model: User.scope('userOwner')
            },
            {
                model: Spot.scope("reviewScope")
            },
            {
                model: ReviewImages.scope("defaultScope"),
                
                }
            
    
],
})


if(Review){
    const Reviews = Review
    return res.json({Reviews})
}
  
        

}),


router.post('/:reviewId/images', restoreUser, async (req, res)=>{
    const revid = req.params.reviewId
     let {id, url} = req.body
    if(revid > 300){
        return res.status(404).json({ message: "Review couldn't be found", statusCode: 404 })
    }
    let reviewId = revid
    let ReviewId = revid
    const result = await ReviewImages.scope("defaultScope").create({id, reviewId, ReviewId, url})
    const Rest = await ReviewImages.scope("defaultScope").findByPk(revid)
    
    return res.status(200).json(Rest)
    
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
            return res.status(404).send({ message: "Review couldn't be found", statusCode: 404 })
        }
        await spots.update({ review: review})
        spots.review = review
        

        const result = await Reviews.scope("liveScope").findByPk(spot)


        return res.json(
           result
        )})

module.exports = router;