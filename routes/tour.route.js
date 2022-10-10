const express = require("express");
const router = express.Router();
const tourControllers = require("../controllers/tour.controller");

router
  .route("/bulk-update")
  /**
   * @api {patch} /bulk-update
   * @apiDescription Update multiple data from body query
   * @apiPermission all
   */
  .patch(tourControllers.updateMultipleData);

router
  .route("/bulk-delete")
  /**
   * @api {delete} /bulk-delete
   * @apiDescription Delete multiple data from body query
   * @apiPermission all
   */
  .delete(tourControllers.deleteMultipleData);

router
  .route("/")
  /**
   * @api {get} /
   * @apiDescription Get all data
   * @apiPermission all
   */
  .get(tourControllers.getTours)
  /**
   * @api {post} /bulk-delete
   * @apiDescription Sava data
   * @apiPermission all
   */
  .post(tourControllers.saveTour);

router
  .route("/:id")
  /**
   * @api {patch} /:id
   * @apiDescription Updata data by id parameter
   * @apiPermission all
   */
  .patch(tourControllers.updateData)
  /**
   * @api {delete} /:id
   * @apiDescription Delete data by id parameter
   * @apiPermission all
   */
  .delete(tourControllers.deleteData);

module.exports = router;