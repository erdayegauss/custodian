module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();

    router.post("/", users.create);

    /**
     * @swagger
     * /api/users/withVaults:
     *   get:
     *       tags: [Users]
     *       summary: Get user with vaults
     *       description: Use to request user with vaults
     *       responses:
     *           '200':
     *               description: A successful response
     *               content:
     *                   application/json:
     *                       schema:
     *                          type: array
     */
    router.get("/withVaults", users.findOneWithVaults);

    /**
     * @swagger
     * /api/users/:
     *   get:
     *       tags: [Users]
     *       summary: Get all users
     *       description: Use to request all users
     *       responses:
     *           '200':
     *               description: A successful response
     *               content:
     *                   application/json:
     *                       schema:
     *                          type: array
     */
    router.get("/", users.findAll);

    app.use('/api/users', router);
}