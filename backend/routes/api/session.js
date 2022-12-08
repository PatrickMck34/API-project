const express = require('express')
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();
// backend/routes/api/session.js
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// Restore session user

const validateLogin = [
  check('credential')
  .exists({ checkFalsy: true })
  .notEmpty()
  .withMessage('Please provide a valid email or username.'),
  check('password')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a password.'),
  handleValidationErrors
];
//login
router.post(
  '/',
  validateLogin,
  async (req, res, next) => {
    const { credential, password } = req.body;
    
    const user = await User.login({ credential, password });
    
    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return res.status(401).json({message: 'Invalid credentials', statusCode: '401'});
    }
    
    await setTokenCookie(res, user);
    let {id, firstName, lastName, email, username, token} = req.body
     id = user.id
     firstName = user.firstName
     lastName = user.lastName
     email = user.email
     username = user.username
     token = ""
     const users = {id, firstName, lastName, email, username, token}
    return res.status(201).json(
      {users
        // "user": {
        //   "id": 1,
        //   "firstName": "John",
        //   "lastName": "Smith",
        //   "email": "john.smith@gmail.com",
        //   "username": "JohnSmith"
        // }
      }
    );
  }
  );
  // Log out
  router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
    );
    
    router.get(
        '/',
        restoreUser,
        (req, res) => {
          const { user } = req;
          if (user) {
            
            id = user.id
            firstName = user.firstName
            lastName = user.lastName
            email = user.email
            username = user.username
            users = {id, firstName, lastName, email, username} 
            return res.json( {user
              // "user": {
              //   "id": 1,
              //   "firstName": "John",
              //   "lastName": "Smith",
              //   "email": "john.smith@gmail.com",
              //   "username": "JohnSmith",
              // }
            }
               

          );
          } else return res.json({
            "user": null
          });
        }
      );
    module.exports = router;