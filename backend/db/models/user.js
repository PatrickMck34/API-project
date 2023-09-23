'use strict';

const bcrypt = require('bcryptjs');
const {
  Model, Validator
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const { id, username,  } = this; // context will be the User instance
      return { id, username,};}
      validatePassword(password) {
        return bcrypt.compareSync(password, this.hashedPassword.toString());
      }
      static currentUserId(req, res) {
        let { user } = req
        let id = user.id
        return id
      }
      static getCurrentUserById(id) {
        return User.scope("currentUser").findByPk(id);
      }
      static async login({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
        
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    }
       static async signup({ username, password, }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        
        hashedPassword,
       
      });
      return await User.scope('currentUser').findByPk(user.id);
    }
      
    static associate(models) {
     

     
    }
  }
  User.init({
    username: {type:DataTypes.STRING,
     allowNull: false,
     validate:{
      len: [4,30],
      isNotEmail(value) {
        if (Validator.isEmail(value)) {
          throw new Error("Cannot be an email.");
        }}
     }
    },
  
    
    hashedPassword: {type: DataTypes.STRING.BINARY,
    allowNull: false,
    validate: {

      len: [60,60]
    },
  },
   
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      
    },
    token: {
      type: DataTypes.STRING
    }
    
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
     
    },
   
  });

  return User;
};