module.exports = app => {
    const wallets = require("../controllers/wallet.controller.js");
    var router = require("express").Router();
    // Create a new Wallet
    router.post("/", wallets.create);
    router.get("/", wallets.findAllByUserId);
    router.post("/btc", wallets.createBtcKey);
    router.post("/eth", wallets.createEthKey);

    app.use('/api/wallets', router);
}