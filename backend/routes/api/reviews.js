const express = require('express')
const { Reviews, Spot, User, ReviewImages } = require('../../db/models');
// const user = require('../../db/models/user');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
// backend/routes/api/session.js
db = require('../../../backend/config/database')

router.get('/current', async (req, res)=>{
    const reviews = await Reviews.getReviewsAll(req, res)
    return res.json({reviews})
})

router.post('/:reviewId/images', restoreUser, async (req, res)=>{
    const reviewId = req.params
    if(parseInt(reviewId.reviewId) > 300){
        return res.status(404).json({ message: "Review couldn't be found", statusCode: 404 })
    }
    const checkReviewId = await Reviews.findByPk(reviewId.reviewId)
    const urlImage = req.body
     
    const newImage = await ReviewImages.create(urlImage)
    const {id, url} = newImage
    
    return res.json({id, url})
    
})
module.exports = router;