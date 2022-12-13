module.exports = app => {
    const vaults = require("../controllers/vault.controller.js");
    var router = require("express").Router();

    router.post("/", vaults.create);
    router.get("/", vaults.findAllWithWallets);
    router.get("/:id", vaults.findOneWithWallets);


    router.get("/withWallets/:id", vaults.findOneWithWallets);

    /**
     * @swagger
     * /api/vaults/withWallets:
     *   get:
     *       tags: [Vaults]
     *       summary: Get all Vault with Wallets
     *       description: Use to request all Vault with Wallets
     *       responses:
     *           '200':
     *               description: A successful response
     *               content:
     *                   application/json:
     *                       schema:
     *                          type: array
     */
    router.get("/withWallets", vaults.findAllWithWallets);

    app.use('/api/vaults', router);
}

