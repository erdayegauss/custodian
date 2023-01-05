const db = require("./app/models");
const userController = require("./app/controllers/user.controller");
const assetController = require("./app/controllers/asset.controller");
const vaultController = require("./app/controllers/vault.controller");
const walletController = require("./app/controllers/wallet.controller");
const whitelistController = require("./app/controllers/whitelist.controller");
const transactionController = require("./app/controllers/transaction.controller");

const run = async () => {
    const user1 = await userController.createUser({
        username: "user1",
        password: "$2b$10$.wjul86Iqdkt/siWXdJM9OwmZwe5erVXElkDpHOtRj9DihT95AX3y",
        name: "John Doe",
        firstName: "John",
        lastName: "Doe",
        email: "JohnDoe@jsfund.cn",
        label: "John",
        image: "avatar/data/avatar.jpg",
        status: "active",
        role: "Customer"
    });
    const user2 = await userController.createUser({
        username: "user2",
        password: "$2b$10$QxT.jJxFzTiMfCXfOMGZJ.QNGcJeGiLZbz9prIX9f5S93RP/1wmzW",
        name: "Lily Hanks",
        firstName: "Lily",
        lastName: "Hanks",
        email: "LilyHanks@jsfund.cn",
        label: "Lily",
        image: "avatar/data/avatar2.jpg",
        status: "active",
        role: "Customer"
    });
    const user3 = await userController.createUser({
        username: "user3",
        password: "$2b$10$QOMWoXQXzspbGnEPuRgz7OJIVSVnokMw0BvFOkF/EPxUJCzmC1ppO",
        name: "Jerry Lee",
        firstName: "Jerry",
        lastName: "Lee",
        email: "JerryLee@jsfund.cn",
        label: "Jerry",
        image: "avatar/data/avatar3.png",
        status: "active",
        role: "Customer"
    });
    const user4 = await userController.createUser({
        username: "user4",
        password: "$2b$10$hYHilnDFPPS8akJFJZ1GUe5x0R/cXCjXJX7hXH1e9E3JGHN.YTRc6",
        name: "Shaun Parker",
        firstName: "Shaun",
        lastName: "Parker",
        email: "ShaunParker@jsfund.cn",
        label: "Shaun",
        image: "avatar/data/avatar4.jpg",
        status: "active",
        role: "Customer"
    });
    const user5 = await userController.createUser({
        username: "user5",
        password: "$2b$10$9oRHLsYOs5qiqjzQ3sO5G.bgkZGR0XUmrh6hOBOQ4/.TE/08CQJjK",
        name: "Kevin Woods",
        firstName: "Kevin",
        lastName: "Woods",
        email: "KevinWoods@jsfund.cn",
        label: "Kevin",
        image: "avatar/data/avatar5.jpg",
        status: "active",
        role: "Customer"
    });


    const asset1 = await assetController.createAsset({
        name: "Bitcoin",
        symbol: "BTC",
        image: "asset/bitcoin.png",
        status: "active",
        price: 16822.18,
        description: "Bitcoin is a cryptocurrency invented in 2008"
    });

    const asset2 = await assetController.createAsset({
        name: "Ethereum",
        symbol: "ETH",
        image: "asset/ethereum.png",
        status: "active",
        price: 1251.35,
        description: "Ethereum is an open-source, public, blockchain-based distributed computing platform"
    });

    const asset3 = await assetController.createAsset({
        name: "Litecoin",
        symbol: "LTC",
        image: "asset/litecoin.png",
        status: "active",
        price: 75.29,
        description: "Litecoin is a peer-to-peer cryptocurrency"
    });

    const asset4 = await assetController.createAsset({
        name: "Ripple",
        symbol: "XRP",
        image: "asset/xrp.png",
        status: "active",
        price: 10.23,
        description: "Ripple is a real-time gross settlement system (RTGS)..."
    });

    const vault1_1 = await vaultController.createVault({
        name: "Quant Vault",
        image: "vault/vault_1_1.png",
        amount: 3920,
        status: "active",
        statusBg: "#00FF00",
        description: "John's Quant Vault",
        userId: user1.id
    });

    const vault1_2 = await vaultController.createVault({
        name: "John's AutoCall Vault",
        image: "vault/vault_1_1.png",
        amount: 2230,
        status: "active",
        statusBg: "#00FF00",
        description: "John's AutoCall Vault",
        userId: user1.id
    });

    const vault2_1 = await vaultController.createVault({
        name: "Options Vault",
        image: "vault/vault_1_1.png",
        amount: 3000,
        status: "active",
        statusBg: "#00FF00",
        description: "Lily's Options Vault",
        userId: user2.id
    });

    const vault2_2 = await vaultController.createVault({
        name: "Grid Vault",
        image: "vault/vault_1_1.png",
        amount: 200,
        status: "active",
        statusBg: "#00FF00",
        description: "Lily's Grid Vault",
        userId: user2.id
    });

    const vault3_1 = await vaultController.createVault({
        name: "Dual currency Vault",
        image: "vault/vault_1_1.png",
        amount: 5000,
        status: "active",
        statusBg: "#00FF00",
        description: "Jerry's Dual currency Vault",
        userId: user3.id
    });

    const wallet1_1_1 = await walletController.createWallet({
        name: "John's Bitcoin Wallet in Quant Vault",
        address: "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
        assetName: "Bitcoin",
        assetSymbol: "BTC",
        amount: 50,
        status: "active",
        assetId: asset1.id,
        vaultId: vault1_1.id,
        vaultName: vault1_1.name,
        userId: user1.id,
        userName: user1.name
    });

    const wallet1_1_2 = await walletController.createWallet({
        name: "John's Ethereum Wallet in Quant Vault",
        address: "0x2E87B78eAdaa930eb43254665a9abB0437D72408",
        assetName: "Ethereum",
        assetSymbol: "ETH",
        amount: 1000,
        status: "active",
        assetId: asset2.id,
        vaultId: vault1_1.id,
        vaultName: vault1_1.name,
        userId: user1.id,
        userName: user1.name
    });

    const wallet1_1_3 = await walletController.createWallet({
        name: "John's Litecoin Wallet in Quant Vault",
        address: "LP98Q2gPZ9gUhoL5fDji357HPRHxVqWh6j",
        assetName: "Litecoin",
        assetSymbol: "LTC",
        amount: 1000,
        status: "active",
        assetId: asset3.id,
        vaultId: vault1_1.id,
        vaultName: vault1_1.name,
        userId: user1.id,
        userName: user1.name
    });

    const wallet1_1_4 = await walletController.createWallet({
        name: "John's Ripple Wallet in Quant Vault",
        address: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
        assetName: "Ripple",
        assetSymbol: "XRP",
        amount: 1000,
        status: "active",
        assetId: asset4.id,
        vaultId: vault1_1.id,
        vaultName: vault1_1.name,
        userId: user1.id,
        userName: user1.name
    });

    const wallet1_1_5 = await walletController.createWallet({
        name: "John's Ripple Wallet in Quant Vault",
        address: "wefwefwefwfwfef",
        assetName: "Bitcoin",
        assetSymbol: "BTC",
        amount: 1000234,
        status: "active",
        assetId: asset1.id,
        vaultId: vault1_1.id,
        vaultName: vault1_1.name,
        userId: user1.id,
        userName: user1.name
    });

    const wallet1_2_1 = await walletController.createWallet({
        name: "John's Bitcoin Wallet in AutoCall Vault",
        address: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
        assetName: "Bitcoin",
        assetSymbol: "BTC",
        amount: 1000,
        status: "active",
        assetId: asset1.id,
        vaultId: vault1_2.id,
        vaultName: vault1_2.name,
        userId: user1.id,
        userName: user1.name
    });

    const wallet1_2_2 = await walletController.createWallet({
        name: "John's Ethereum Wallet in AutoCall Vault",
        address: "3da9dfa130df4de4673b89022ee50ff26f6ea73cf",
        assetName: "Ethereum",
        assetSymbol: "ETH",
        amount: 1000,
        status: "active",
        assetId: asset2.id,
        vaultId: vault1_2.id,
        vaultName: vault1_2.name,
        userId: user1.id,
        userName: user1.name
    });

    const wallet2_1_1 = await walletController.createWallet({
        name: "Lily's Bitcoin Wallet in Quant Vault",
        address: "4a52e96bacdabb82fd05763e25335261b270efcb",
        assetName: "Bitcoin",
        assetSymbol: "BTC",
        amount: 1000,
        status: "active",
        assetId: asset1.id,
        vaultId: vault2_1.id,
        vaultName: vault2_1.name,
        userId: user2.id,
        userName: user2.name
    });

    const wallet2_1_2 = await walletController.createWallet({
        name: "Lily's Ethereum Wallet in Quant Vault",
        address: "0xbab9243663849eD787567A7C5aB43F4e48d5F58C",
        assetName: "Ethereum",
        assetSymbol: "ETH",
        amount: 1000,
        status: "active",
        assetId: asset2.id,
        vaultId: vault2_1.id,
        vaultName: vault2_1.name,
        userId: user2.id,
        userName: user2.name
    });

    const whitelist1_to_2 = await whitelistController.createWhitelist({
        adminUserId: user1.id,
        adminUserName: user1.name,
        targetUserId: user2.id,
        targetUserName: user2.name,
        defaultTargetPublicKey: "0xbab9243663849eD787567A7C5aB43F4e48d5F58C",
        status: "active",
        statusBg: "#00FF00"
    });

    const whitelist1_to_3 = await whitelistController.createWhitelist({
        adminUserId: user1.id,
        adminUserName: user1.name,
        targetUserId: user3.id,
        targetUserName: user3.name,
        defaultTargetPublicKey: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        status: "pending",
        statusBg: "#00FF00"
    });

    const whitelist2_to_1 = await whitelistController.createWhitelist({
        adminUserId: user2.id,
        adminUserName: user2.name,
        targetUserId: user1.id,
        targetUserName: user1.name,
        defaultTargetPublicKey: "0x2E87B78eAdaa930eb43254665a9abB0437D72408",
        status: "pending",
        statusBg: "#00FF00"
    });

    const whitelist1_to_4 = await whitelistController.createWhitelist({
        adminUserId: user1.id,
        adminUserName: user1.name,
        targetUserId: user4.id,
        targetUserName: user4.name,
        defaultTargetPublicKey: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
        status: "invalid",
        statusBg: "#00FF00"
    });

    const transaction_from_1_1_1_to_2_1_1_asset_1 = await transactionController.createTransaction({
        txType: "Transfer",
        txId: "0x2562a1f91567",
        txHash: "0x3bbe99a6146ff79c25d6ba73667d84a327b8bb92da10ee50873ec4a6e454689e",
        txStatus: "pending",
        fee: 0.0001,
        amount: 100,
        senderId: user1.id,
        senderName: user1.name,
        receiverId: user2.id,
        receiverName: user2.name,
        fromVaultId: vault1_1.id,
        fromVaultName: vault1_1.name,
        toVaultId: vault2_1.id,
        toVaultName: vault2_1.name,
        fromWalletId: wallet1_1_1.id,
        fromAddress: wallet1_1_1.address,
        toWalletId: wallet2_1_1.id,
        toAddress: wallet2_1_1.address,
        assetId: asset1.id,
        assetName: asset1.name,
        assetSymbol: asset1.symbol,
        sign: "John transfer to Lily",
        note: "Transfer from John's Bitcoin Wallet in Quant Vault to Lily's Bitcoin Wallet in Quant Vault",
        aml: "Pass"
    });

    const transaction_from_2_1_2_to_1_2_2_asset_2 = await transactionController.createTransaction({
        txType: "Transfer",
        txId: "0x2562a1f91568",
        txHash: "0x3bbe99a6146ff79c25d6ba73667d84a327b8bb92da10ee50873ec4a6e454689f",
        txStatus: "success",
        fee: 3.23,
        amount: 100,
        senderId: user2.id,
        senderName: user2.name,
        receiverId: user1.id,
        receiverName: user1.name,
        fromVaultId: vault2_1.id,
        fromVaultName: vault2_1.name,
        toVaultId: vault1_2.id,
        toVaultName: vault1_2.name,
        fromWalletId: wallet2_1_2.id,
        fromAddress: wallet2_1_2.address,
        toWalletId: wallet1_2_2.id,
        toAddress: wallet1_2_2.address,
        assetId: asset2.id,
        assetName: asset2.name,
        assetSymbol: asset2.symbol,
        sign: "Lionel",
        note: "Transfer from Lily's Ethereum Wallet in Quant Vault to John's Ethereum Wallet in AutoCall Vault",
        aml: "Pass"
    });
};

// db.sequelize.sync();
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.");
    run();
});
console.log("Done!");
