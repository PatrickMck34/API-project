const express = require('express')
const { Reviews, Spot, User, ReviewImages } = require('../../db/models');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');

db = require('../../../backend/config/database')

router.get('/current',restoreUser, async (req, res)=>{
    const currentUser = User.currentUserId(req, res)
    const Rev = await Reviews.findAll({
        // where: {
        //     id : currentUser.userId
        //     },
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
return res.json(Rev)
        

}),


router.post('/:reviewId/images', restoreUser, async (req, res)=>{
    const reviewId = req.params
   let  url = req.body
    if(reviewId.reviewId > 300){
        return res.status(404).json({ message: "Review couldn't be found", statusCode: 404 })
    }
    // const checkReviewId = await Reviews.findByPk(reviewId.reviewId)
    // const urlImage = req.body
     
    const newImage = await ReviewImages.scope('defaultScope').create(url)
    const id = newImage.id
     url = newImage.url
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
})
module.exports = router;