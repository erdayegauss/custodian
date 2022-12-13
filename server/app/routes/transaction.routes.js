module.exports = app => {
    const transactions = require("../controllers/transaction.controller.js");
    var router = require("express").Router();


    /**
     * @swagger
     * paths:
     *   /api/transactions:
     *     post:
     *       tags: [Transactions]
     *       summary: Create a new transaction
     *       consumes:
     *         - application/json
     *       parameters:
     *         - in: body
     *           name: transactionInfo
     *           description: the info of the transaction to create
     *           schema:
     *             type: object
     *             required:
     *               - assetId
     *               - amount
     *               - senderId
     *               - receiverId
     *             properties:
     *               assetId:
     *                 type: integer
     *                 example: 1
     *               amount:
     *                 type: integer
     *                 example: 100
     *               senderId:
     *                 type: integer
     *                 example: 1
     *               receiverId:
     *                 type: integer
     *                 example: 2
     *       responses:
     *         200:
     *           description: Created
     */
    router.post("/", transactions.create);

    /**
     * @swagger
     * /api/transactions:
     *   get:
     *       tags: [Transactions]
     *       summary: Get all assets
     *       description: Use to request all assets
     *       responses:
     *           '200':
     *               description: A successful response
     *               content:
     *                   application/json:
     *                       schema:
     *                          type: array
     */
    router.get("/", transactions.findAllByUserId);

    app.use('/api/transactions', router);
};