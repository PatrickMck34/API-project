const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

//signup
router.post(
  '/',
  validateSignup,
  async (req, res) => {
    let { email, password, username, firstName, lastName, token } = req.body;
    const userEmail = await User.findAll({
      where:{
        email: email
      }
    })
    if(!userEmail){
      let message =  "User already exists"
      let statusCode = 403
      let errors = {"email": "User with that email already exists"}
      let result = {message, statusCode, errors}
      return res.status(201).json(result)
      
    } else{
      return handleValidationErrors
    }
    let users = await User.scope('defaultScope').signup({ email, password, username, firstName, lastName, token});
     
    
     let id = users.id
     token = "" 
     const user = {id, firstName, lastName, email, username, token}
     setTokenCookie(res, users);
    return res.json(
      {user
        // "user": {
        //   "id": 1,
        //   "firstName": "John",
        //   "lastName": "Smith",
        //   "email": "john.smith@gmail.com",
        //   "username": "JohnSmith"
        // }
      }
    );
  },
  // router.post("/api/spots", async (req, res) => {
  //   const {address, city, state, country, lat, lng, name, description, price} = req.body
  //   const spot = await Spot.create({address, city, state, country, lat, lng, name, description, price})
  //   return res.json({ spot })
  // }),
  
);

module.exports = router;