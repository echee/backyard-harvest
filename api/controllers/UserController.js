/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


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
   * `UserController.login()`
   */
  login: function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  }
};

