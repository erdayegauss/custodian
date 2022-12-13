module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();

    /**,
     * @swagger
     * paths:
     *   /api/auth/login:
     *     post:
     *       tags: [Auth]
     *       summary: Login
     *       consumes:
     *         - application/json
     *       parameters:
     *         - in: body
     *           name: userInfo
     *           description: the info of the user to login
     *           schema:
     *             type: object
     *             required:
     *               - username
     *             properties:
     *               username:
     *                 type: string
     *                 example: "user1"
     *               password:
     *                 type: string
     *                 example: "password1"
     *       responses:
     *         200:
     *           description: Created
     */
    router.post("/login", users.login);


    /**,
     * @swagger
     * paths:
     *   /api/auth/login:
     *     get:
     *       tags: [Auth]
     *       summary: Check login status
     *       consumes:
     *         - application/json
     *       responses:
     *        200:
     *          description: OK
     *        401:
     */
    router.get("/login", users.checkLoginStatus);
    router.post("/register", users.register);

    app.use('/api/auth', router);
}