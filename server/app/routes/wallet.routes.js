module.exports = app => {
    const wallets = require("../controllers/wallet.controller.js");
    var router = require("express").Router();
    // Create a new Wallet
    router.post("/", wallets.create);
    router.get("/", wallets.findAllByUserId);

    /**,
     * @swagger
     * paths:
     *   /api/wallets/btc:
     *     post:
     *       tags: [Wallets]
     *       summary: Create a new BTC wallet
     *       consumes:
     *         - application/json
     *       parameters:
     *         - in: body
     *           name: userInfo
     *           description: the info of the user to login
     *           schema:
     *             type: object
     *             required:
     *               - vaultId
     *             properties:
     *               vaultId:
     *                 type: integer
     *                 example: 1
     *               assetId:
     *                 type: integer
     *                 example: 1
     *               vaultName:
     *                 type: string
     *                 example: "BTC Wallet"
     *       responses:
     *         200:
     *           description: Created
     */
    router.post("/btc", wallets.createBtcKey);

    /**,
     * @swagger
     * paths:
     *   /api/wallets/eth:
     *     post:
     *       summary: Create a new ETH wallet
     *       tags: [Wallets]
     *       consumes:
     *         - application/json
     *       parameters:
     *         - in: body
     *           name: userInfo
     *           description: the info of the user to login
     *           schema:
     *             type: object
     *             required:
     *               - vaultId
     *             properties:
     *               vaultId:
     *                 type: integer
     *                 example: 1
     *               assetId:
     *                 type: integer
     *                 example: 1
     *               vaultName:
     *                 type: string
     *                 example: "ETH"
     *       responses:
     *         200:
     *           description: Created
     */
    router.post("/eth", wallets.createEthKey);

    app.use('/api/wallets', router);
}