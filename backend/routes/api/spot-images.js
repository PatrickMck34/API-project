const express = require('express');
const { Error } = require('sequelize');
const { Spot, User, SpotImages, Reviews } = require('../../db/models');

const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
db = require('../../../backend/config/database')


router.delete("/:spotImageId", async (req, res) => {
    const ids = req.params.spotImageId
    const spotCheck = await SpotImages.findByPk(ids)
    if(spotCheck === null){
        return res.status(404).json({ message: "Unable to find Spot", statusCode: 404 })
    }
    await SpotImages.destroy({
        where:{
            id : ids
        }
    })

    return res.json({message:"Successfully Deleted", statusCode: 200})
})
module.exports = router;