/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	

  index: function (req, res) {
    res.redirect('/');
  },

  /**
   * `UserController.new()`
   */
  new: function (req, res) {
    res.view(); 
  },


  /**
   * `UserController.update()`
   */
  create: function (req, res, next) {
    var params = req.params.all();

    User.create(params, function(err, user) {
      if (err) return next(err);
      res.redirect('/user');
    });     
  },


  /**
   * `UserController.update()`
   */
  // update: function (req, res) {

  // },


  /**
   * `UserController.destroy()`
   */
  // destroy: function (req, res) {
  //   return res.json({
  //     todo: 'destroy() is not implemented yet!'
  //   });
  // },

  /**
   * `UserController.validate()`
   */
  validate: function (req, res, next) {  
    return res.json({
      todo: 'validate() is not implemented yet!'
    });
  },

  
};

