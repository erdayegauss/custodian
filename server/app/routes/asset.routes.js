module.exports = app => {
    const assets = require("../controllers/asset.controller.js");
    var router = require("express").Router();

    /**
     * @swagger
     * /api/assets:
     *   get:
     *       tags: [Assets]
     *       summary: Get all assets
     *       description: Use to request all assets
     *       responses:
     *           '200':
     *               description: A successful response
     *               content:
     *                   application/json:
     *                       schema:
     *                           type: array
     *                           items:
     *                            properties:
     *                               id:
     *                                   type: integer
     *                                   description: The auto-generated id of the asset
     *                                   example: 1
     *                               assetId:
     *                                   type: string
     *                                   description: The asset id of the asset
     *                                   example: 1
     *                               assetName:
     *                                   type: string
     *                                   description: The asset name of the asset
     *                                   example: “Bitcoin”
     *                               label:
     *                                   type: string
     *                                   description: The asset symbol of the asset
     *                                   example: “BTC”
     *                               image:
     *                                   type: string
     *                                   description: The asset image of the asset
     *                                   example: “https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579”
     *
     */
    router.get("/", assets.findAll);


    router.post("/", assets.create);

    app.use('/api/assets', router);
}