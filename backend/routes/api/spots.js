const express = require('express');
const { emptyQuery } = require('pg-protocol/dist/messages');
const { Error } = require('sequelize');
const { Tree, User, } = require('../../db/models');

const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');

db = require('../../../backend/config/database')

router.get(
    '/current', restoreUser, async (req, res) => {
        
        const currentUser = User.currentUserId(req, res)
        const Spots = await Tree.findAll({
            where: {
                ownerId: currentUser
            }
            })
            
            return res.json({
                Spots
            });
                
                });
   
   
        router.get(
            '/:treeId', async (req, res) => {
                const number = req.params.treeId          
                let result = {}
                const checkTree = await Tree.findByPk(number,{
                    where: {
                        number : number,
                     
                        }
                    }, 
                        
                )
                            
                
                
              
                return res.json(checkTree)
            });
            
            router.get(
            '/', async (req, res) => {
        
        
            const tree = await Tree.findAll({
               
            })
        
            return res.json(
                tree
        )
            });
    
        
           
            router.post("/", restoreUser, async (req, res) => {
             
            const {id, number, location, forSurvivor, message } = req.body;
                const spot = await Tree.create({ number, location, forSurvivor, message })
              
               await spot.save()
               
    
            return res.status(201).json(spot)
        
        })
            
            router.delete("/:spotsId", async (req, res) => {
                const ids = req.params.spotsId
                const spotCheck = await Spot.findByPk(ids)
    if(spotCheck === null){
        return res.status(404).json({ message: "Unable to find Spot", statusCode: 404 })
    }
    await Spot.destroy({
        where:{
            id : ids
        }
    })
    


    return res.json({message:"Successfully Deleted", statusCode: 200})
})

router.put(
    '/:spotId', async (req, res) => {
        const spot = req.params.spotId
        const { id, ownerId, address, city, state, country, lat, lng, name, description, price } = req.body

        let spots = await Spot.findByPk(spot)
        if(spots === null){
            return res.status(404).send({ message: "Spot couldn't be found", statusCode: 404 })
        }
        await spots.update({ address: address, city: city, state: state, country: country, lat: lat, lng: lng, name: name, description: description, price: price })
        // spots.ownerId = ownerId
        // spots.address = address
        // spots.city = city
        // spots.state = state
        // spots.country = country
        // spots.lat = lat
        // spots.lng = lng
        // spots.name = name
        // spots.description = description
        // spots.price = price
       spots.save()
      
        return res.json(
           spots
        );
    });

module.exports = router;