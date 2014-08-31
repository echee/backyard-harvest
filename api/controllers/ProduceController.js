/**
 * ProduceController
 *
 * @description :: Server-side logic for managing produces
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
   * `ProduceController.create()`
   */
  create: function (req, res, next) {
    var params = req.params.all();

    Produce.create(params, function(err, produce) {
      if (err) return next(err);
      res.redirect('/produce');
    });    
  },


  /**
   * `ProduceController.destroy()`
   */
  // destroy: function (req, res) {
  //   return res.json({
  //     todo: 'destroy() is not implemented yet!'
  //   });
  // },


  /**
   * `ProduceController.update()`
   */
  // update: function (req, res) {
  //   return res.json({
  //     todo: 'update() is not implemented yet!'
  //   });
  // }
};

