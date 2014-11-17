/**
 * BackyardController
 *
 * @description :: Server-side logic for managing backyards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  /**
   * `BackyardController.new()`
   */
  new: function (req, res) {
    res.view(); 
  },

  /**
   * `BackyardController.create()`
   */
  create: function (req, res, next) {
    var params = req.params.all();

    Backyard.create(params, function(err, backyard) {
      if (err) return next(err);
      res.redirect('/backyard');
    }); 
  },  
};

