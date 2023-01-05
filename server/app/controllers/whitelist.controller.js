const db = require("../models");
const Whitelist = db.whitelists;
const User = db.users;
const Op = db.Sequelize.Op;
const authJwt = require("../middleware/authJwt");

const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

// Create and Save a new Whitelist
exports.create = (req, res) => {
    // Validate request
    if (!req.body.targetUserId) {
        res.status(400).send({
            message: "target user can not be empty!"
        });
        return;
    }
    const token = req.headers.authorization;
    const targetUserId = req.body.targetUserId;

    authJwt.verifyToken(token).then((data) => {
        const adminUserId = data.id;
        User.findByPk(adminUserId).then((adminUser) => {
            User.findByPk(targetUserId).then((targetUser) => {
                const whitelist = {
                    adminUserId: adminUserId,
                    adminUserName: adminUser.name,
                    targetUserId: targetUserId,
                    targetUserName: targetUser.name,
                    status: 'pending',
                    statusBg: 'orange'
                };

                // Save Whitelist in the database
                Whitelist.create(whitelist)
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating the Whitelist."
                        });
                    });
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving targetUser."
                });
            });
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving adminUser."
            });
        });
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating new Whitelist."
        });
    });
};

// find all targetUser by adminUserId
exports.findAllByAdminUserId = (req, res) => {
    const token = req.headers.authorization;

    authJwt.verifyToken(token).then((data) => {
        const adminUserId = data.id;

        const ifShorten = req.query.shortenAddress;

        Whitelist.findAll({where: {adminUserId: adminUserId}, include: ["targetUser"]})
            .then(rawWhitelistData => {
                let resultWhitelists = rawWhitelistData.map((whitelist) => {

                    let resultWhitelist = {
                        image: whitelist.targetUser.image,
                        id: whitelist.id,
                        name: whitelist.targetUserName,
                        deFaultTargetPublicKey: ifShorten === 'true'? shortenAddress(whitelist.defaultTargetPublicKey) : whitelist.defaultTargetPublicKey,
                        status: whitelist.status,
                        statusBg: whitelist.status === 'active' ? 'green' : (whitelist.status === 'pending' ? 'orange' : 'red')
                    }
                    return resultWhitelist;
                })
                res.send(resultWhitelists);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving whitelists."
                });
            });
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving whitelists."
        });
    });
};

exports.findCandidateUser = (req, res) => {
    const token = req.headers.authorization;

    authJwt.verifyToken(token).then((data) => {
        const adminUserId = data.id;
        const ifShorten = req.query.shortenAddress;

        Whitelist.findAll({where: {adminUserId: adminUserId}, include: ["targetUser"]})
            .then(rawWhitelistData => {
                let resultWhitelists = rawWhitelistData.map((whitelist,i) => {

                    let resultWhitelist = {
                        ID: i,
                        targetUserId: whitelist.targetUserId,
                        label: whitelist.targetUserName,
                        name: whitelist.targetUserName,
                        image: whitelist.targetUser.image,
                        id: whitelist.id,
                        status: whitelist.status,
                        statusBg: whitelist.status === 'active' ? 'green' : (whitelist.status === 'pending' ? 'orange' : 'red'),
                        deFaultTargetPublicKey: ifShorten === 'true'? shortenAddress(whitelist.defaultTargetPublicKey) : whitelist.defaultTargetPublicKey,
                    }
                    return resultWhitelist;
                })
                res.send(resultWhitelists);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving whitelists."
                });
            });
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving whitelists."
        });
    });
};


exports.createWhitelist = (whitelist) => {
    return Whitelist.create(whitelist)
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        });
}