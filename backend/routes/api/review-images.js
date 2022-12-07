const express = require('express');
const { Error } = require('sequelize');
const { Spot, User, SpotImages, Reviews, ReviewImages } = require('../../db/models');
const reviewimages = require('../../db/models/reviewimage');

const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
db = require('../../../backend/config/database')

router.delete("/:reviewImageId", async (req, res) => {
    const id = req.params.reviewImageId
    const spotCheck = await ReviewImages.findOne({
        where: {
            id : id
        }
    })
    if(spotCheck === null){
        return res.status(404).json({ message: "Unable to find Review", statusCode: 404 })
    }
    await ReviewImages.destroy({
        where:{
            id : id
        }
    })

    return res.json({message:"Successfully Deleted", statusCode: 200})
})
module.exports = router;