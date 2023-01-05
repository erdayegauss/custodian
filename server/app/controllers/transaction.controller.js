const db = require("../models");
const Transaction = db.transactions;
const Op = db.Sequelize.Op;
const authJwt = require("../middleware/authJwt");
const { SystemSecurityUpdate } = require("@mui/icons-material");

exports.updateEthTransactionStatus = (req, res) => {
    const token = req.headers.authorization;

    authJwt.verifyToken(token).then(async (data) => {
        const id = req.body.recordId;
        const txStatus = req.body.txStatus;

        Transaction.update({txStatus: txStatus}, {
            where: {id: id}
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Transaction was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found or req.body is empty!`
                    });
                }
            }
            )
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Transaction with id=" + id
                });
            }
            );
    })
}

exports.createEthTransaction = (req, res) => {
    const token = req.headers.authorization;

    authJwt.verifyToken(token).then(async (data) => {
        const userId = data.id;
        const name = data.name;

        const txType = "Transfer"
        const txStatus = "pending"
        const fee = 0.0001
        const amount = req.body.amount
        const senderId = userId
        const senderName = name
        const fromAddress = req.body.fromAddress
        const receiverId = req.body.receiverId
        const receiverName = req.body.receiverName;
        const toAddress = req.body.toAddress;
        const assetId = 2
        const assetName = "Ethereum"
        const assetSymbol = "ETH"
        const sign = req.body.sign;
        const note = req.body.note;
        const aml = "pass"

        // Create a Transaction
        const transaction = {
            txType: txType,
            txId: "",
            txHash: "",
            txStatus: txStatus,
            fee: fee,
            amount: amount,
            senderId: senderId,
            senderName: senderName,
            receiverId: receiverId,
            receiverName: receiverName,
            // fromVaultId: "",
            // fromVaultName: "",
            // toVaultId: "",
            // toVaultName: "",
            // fromWalletId: "",
            fromAddress: fromAddress,
            // toWalletId: "",
            toAddress: toAddress,
            assetId: assetId,
            assetName: assetName,
            assetSymbol: assetSymbol,
            sign: sign,
            note: note,
            aml: aml
        }

        Transaction.create(transaction)
        .then(data => {
            const dataObj = data.get({plain:true})
            res.send(dataObj);
        })
        .catch(err => {
            return err;
        });

    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Transaction."
        });
    });
}



// Create and Save a new Transaction
exports.create = (req, res) => {
    // Validate request
    if (!req.body.sender || !req.body.receiver || !req.body.amount || !req.body.asset) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Transaction
    const transaction = {
        sender: req.body.sender,
        receiver: req.body.receiver,
        amount: req.body.amount,
        asset: req.body.asset,
        status: req.body.status,
        statusBg: req.body.statusBg,
        description: req.body.description,
        userId: req.body.userId
    };

    // Save Transaction in the database
    Transaction.create(transaction)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Transaction."
            });
        });
}

// find all transactions by userId
exports.findAllByUserId = (req, res) => {
    const token = req.headers.authorization;

    authJwt.verifyToken(token).then((data) => {
        const userId = parseInt(data.id);

        Transaction.findAll({
            where: {
                [Op.or]: [
                    {senderId: userId},
                    {receiverId: userId}
                ]
            },
            include: ["sender", "receiver", "asset"]
        })
            .then(rawTransactionData => {

                let resultTransactionData = rawTransactionData.map((Tx) => {
                    return createData(Tx.senderId, Tx.receiverId, Tx.amount, Tx.assetId, Tx.txStatus, (Tx.txStatus === 'success' ? 'green' : (Tx.txStatus === 'pending' ? 'orange' : 'red')), Tx.createdAt.toLocaleString('chinese', {hour12: false}),
                        Tx.txType, Tx.toAddress, Tx.txHash, Tx.txId, Tx.fee, Tx.updatedAt.toLocaleString('chinese', {hour12: false}), Tx.sign, Tx.aml, Tx.note, Tx.sender.image, Tx.receiver.image, Tx.asset.image);
                });

                res.send(resultTransactionData);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving transactions."
                });
            });
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving transactions."
        });
    });
}

exports.createTransaction = (transaction) => {
    return Transaction.create(transaction)
        .then(data => {
            return data;
        })
        .catch(err => {
            return err;
        });
}

function createData(source, destination, amount, asset, status, statusBg, createdAt, type, destAddr, txHash, txId, networkFee, update, signed, aml, note, senderImage, receiverImage, assetImage) {
    return {
        source,
        destination,
        amount,
        asset,
        status,
        statusBg,
        createdAt,
        senderImage,
        receiverImage,
        assetImage,
        history: [
            {
                Type: type,
                DestAddr: destAddr,
                TxHash: txHash,
                TxID: txId,
                NetworkFee: networkFee,
                Amount: amount,
                Update: update,
                Signed: signed,
                AML: aml,
                Note: note
            },
        ],
    };
}