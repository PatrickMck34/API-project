const express = require('express')
const { Reviews, Spot, User, ReviewImages } = require('../../db/models');
// const user = require('../../db/models/user');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
// backend/routes/api/session.js
db = require('../../../backend/config/database')

router.get('/current',restoreUser, async (req, res)=>{
    const currentUser = User.currentUserId(req, res)
    const Review = await Reviews.findAll({
        where: {
            id : currentUser
            },
            include: [{
                model: User.scope('userOwner')
            },
            {
                model: Spot.scope("reviewScope")
            },
            {model: ReviewImages
    }
],
})
        

        return res.json({Review})
}),

router.post('/:reviewId/images', restoreUser, async (req, res)=>{
    const reviewId = req.params
    const url = req.body
    if(reviewId.reviewId > 300){
        return res.status(404).json({ message: "Review couldn't be found", statusCode: 404 })
    }
    // const checkReviewId = await Reviews.findByPk(reviewId.reviewId)
    // const urlImage = req.body
     
    const newImage = await ReviewImages.scope('defaultScope').create(url)
    // const {id, url} = newImage
    
    return res.json(newImage)
    
})
module.exports = router;