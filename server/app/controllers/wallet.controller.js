const db = require("../models");
const Wallet = db.wallets;
const Asset = db.assets;
const Op = db.Sequelize.Op;
const authJwt = require("../middleware/authJwt");
const BKG = require('../middleware/bitcoin-key-generator');
const EKG = require('../middleware/ethereum-key-generator');
const fs = require('fs');
const keyPath = require("../config/path.config").keyPath;


// Create and Save a new Wallet
exports.create = (req, res) => {
    // Validate request
    if (!req.body.address) {
        res.status(400).send({
            message: "Name can not be empty!"
        });
        return;
    }

    // Create a Wallet
    const wallet = {
        name: req.body.name,
        image: req.body.image,
        amount: req.body.amount,
        status: req.body.status,
        statusBg: req.body.statusBg,
        description: req.body.description,
        userId: req.body.userId
    };

    // Save Wallet in the database
    Wallet.create(wallet)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Wallet."
            });
        });
}

exports.findAllByUserId = async (req, res) => {
    const token = req.headers.authorization;

    authJwt.verifyToken(token).then((data) => {
        const userId = data.id;


        Wallet.findAll({
            where: {
                userId: userId
            },
            include: ["asset"]
        })
            .then(data => {
                let tabSet = new Set();
                let rawWallets = data;

                rawWallets.forEach((wallet, i) => {
                    tabSet.add(wallet.asset.id);
                });

                let tabArray = Array.from(tabSet);

                let tabs = tabArray.map(async (tabId) => {

                    let a = await Asset.findByPk(tabId, {
                        raw: true
                    }).then((data) => {
                        return data;
                    }).catch((err) => {
                        console.log(err);
                    });

                    return {
                        id: a.id,
                        tabTitle: a.symbol,
                        image: a.image
                    }
                });

                Promise.all(tabs).then((tabsData) => {

                    let wallets = tabArray.map(async (tabId) => {
                        let w = await Wallet.findAll({
                            raw: true,
                            where: {
                                userId: userId,
                                assetId: tabId,
                            },
                            include: ["vault"]
                        }).then((data) => {
                            return data;
                        }).catch((err) => {
                            console.log(err);
                        });
                        return w;
                    });

                    Promise.all(wallets).then((walletsData) => {

                        let source = []

                        walletsData.forEach((item) => {
                            let assetData = item.map((wallet) => {
                                return {
                                    AccountImage: wallet["vault.image"],
                                    Name: wallet["vault.name"],
                                    amount: wallet.amount
                                }
                            })
                            source.push(assetData)
                        })

                        let result = {
                            tabs: tabsData,
                            source: source
                        }

                        res.send(result)
                    });
                });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving Wallets."
                });
            });
    }).catch((err) => {
            console.log(err);
        }
    );
}


exports.createWallet = (wallet) => {
    return Wallet.create(wallet)
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        });

}

exports.createBtcKey = (req, res) => {
    const token = req.headers.authorization;

    authJwt.verifyToken(token).then((data) => {

        const userId = data.id;

        const vaultId = req.body.vaultId;
        const assetId = req.body.assetId;
        const vaultName = req.body.vaultName;

        const privateOriginKey = BKG.getPrivteOriginKeyByRand();

        const privateKey = BKG.getPrivteKeyByOrigin(privateOriginKey);

        const getPrivetOriginKey = BKG.getPrivteOriginKeyByKey(privateKey);

        const publicOriginKey = BKG.getPublicOriginKey(privateOriginKey);

        const publicKey = BKG.getPublicKeyByOrigin(publicOriginKey);

        const newWallet = {
            address: publicKey,
            assetId: assetId,
            assetName: "Bitcoin",
            assetSymbol: "BTC",
            amount: 0,
            image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
            status: "Active",
            vaultId: vaultId,
            vaultName: vaultName,
            userId: userId
        }
        const btcKey = {
            privateOriginKey: privateOriginKey,
            privateKey: privateKey,
            getPrivetOriginKey: getPrivetOriginKey,
            publicOriginKey: publicOriginKey,
            publicKey: publicKey
        }

        console.log(newWallet);

        Wallet.create(newWallet)
            .then(data => {
                res.send(btcKey);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Wallet."
                });
            });

        var jsonContent = JSON.stringify(btcKey, null, 2);

        fs.writeFile(keyPath + "btc-" + randomString() + ".json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log("JSON file has been saved.");
        });
    }).catch((err) => {
        console.log(err);
    });
}


exports.createEthKey = (req, res) => {
    const token = req.headers.authorization;

    authJwt.verifyToken(token).then((data) => {

        const userId = data.id;
        const username = data.username;

        const vaultId = req.body.vaultId;
        const assetId = req.body.assetId;
        const vaultName = req.body.vaultName;

        let mnemonic = EKG.generateMnemonic()

        let privKey = EKG.generatePrivKey(mnemonic)

        let pubKey = EKG.derivePubKey(privKey)

        let ethAddress = EKG.deriveEthAddress(pubKey)

        const newWallet = {
            address: ethAddress,
            assetId: assetId,
            assetName: "Ethereum",
            assetSymbol: "ETH",
            amount: 0,
            image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
            status: "Active",
            vaultId: vaultId,
            vaultName: vaultName,
            userId: userId,
            userName: username
        }

        let ethKey = {
            mnemonic: mnemonic,
            privKey: privKey.toString('hex'),
            pubKey: pubKey.toString('hex'),
            ethAddress: ethAddress
        }

        Wallet.create(newWallet)
            .then(data => {
                res.send(ethKey);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Wallet."
                });
            });

        var jsonContent = JSON.stringify(ethKey, null, 2);

        fs.writeFile(keyPath + "eth-" + randomString() + ".json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log("JSON file has been saved.");
        });
    }).catch((err) => {
        console.log(err);
    });
}

function randomString() {
    const len = 8;
    let timestamp = new Date().getTime();
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let maxPos = $chars.length;
    let randomStr = '';
    for (let i = 0; i < len; i++) {
        randomStr += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return randomStr + timestamp;
}