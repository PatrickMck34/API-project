const express = require('express');
const { Error } = require('sequelize');
const { Spot, User, SpotImages, Reviews } = require('../../db/models');

const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
db = require('../../../backend/config/database')


router.delete("/:spotImageId", async (req, res) => {
    const ids = req.params.spotImageId
    await SpotImages.destroy({
        where:{
            id : ids
        }
    })

    return res.json("Successfully Deleted")
})
module.exports = router;