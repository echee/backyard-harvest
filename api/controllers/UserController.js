/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/user/new`
   */
  new: function (req, res) {
    res.view();  
    // Send a JSON response
    // return res.json({
    //   hello: 'world'
    // });
  },

  /**
   * Action blueprints:
   *    `/user/edit`
   */
  edit: function (req, res) {
    res.view();  
  },

  /**
   * Action blueprints:
   *    `/user/login`
   */
  login: function (req, res) {
    res.view();  
  },

  /**
   * Action blueprints:
   *    `/user/logout`
   */
  logout: function (req, res) {
    res.view();  
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
