module.exports = app => {
    const whitelists = require("../controllers/whitelist.controller.js");
    var router = require("express").Router();

    /**
     * @swagger
     * paths:
     *   /api/whitelists:
     *     post:
     *       tags: [Whitelists]
     *       summary: Create a new whitelist relationship
     *       consumes:
     *         - application/json
     *       parameters:
     *         - in: body
     *           name: whitelistInfo
     *           description: the info of the whitelist to create
     *           schema:
     *             type: object
     *             required:
     *               - targetUserId
     *             properties:
     *               targetUserId:
     *                 type: integer
     *                 example: 3
     *       responses:
     *         200:
     *           description: Created
     */
    router.post("/", whitelists.create);

    /**
     * @swagger
     * /api/whitelists:
     *   get:
     *       summary: Get all whitelists by adminUserId
     *       tags: [Whitelists]
     *       consumes:
     *          - application/json
     *       responses:
     *           '200':
     *               description: A successful response
     *               content:
     *                   application/json:
     *                       schema:
     *                           type: array
     */
    router.get("/", whitelists.findAllByAdminUserId);


    app.use('/api/whitelists', router);
};