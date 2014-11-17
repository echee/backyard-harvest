/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },    
    password: {
      type: 'string',
      required: true
    },
    backyard: {
      model: 'backyard',
      via: 'owner'
    }
  }
};
