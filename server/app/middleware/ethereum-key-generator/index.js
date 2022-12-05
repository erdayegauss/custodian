// Add imports here

const BIP39 = require('bip39')
const hdkey = require('ethereumjs-wallet/hdkey')
const Wallet = require('ethereumjs-wallet')
const keccak256 = require('js-sha3').keccak256
const EthereumTx = require('ethereumjs-tx')

// Add functions here
function generateMnemonic() {
    return BIP39.generateMnemonic()
}

var isValid = BIP39.validateMnemonic('i love having a pet dog')

function generateSeed(mnemonic) {
    return BIP39.mnemonicToSeed(mnemonic)
}

function generatePrivKey(mnemonic) {
    const seed = generateSeed(mnemonic)
    return hdkey
        .fromMasterSeed(seed)
        .derivePath(`m/44'/60'/0'/0/0`)
        .getWallet()
        .getPrivateKey()
}

function derivePubKey(privKey) {
    const wallet = Wallet.fromPrivateKey(privKey)
    return wallet.getPublicKey()
}

function deriveEthAddress(pubKey) {
    const address = keccak256(pubKey) // keccak256 hash of  publicKey
    // Get the last 20 bytes of the public key
    return '0x' + address.substring(address.length - 40, address.length)
}

function signTx(privKey, txData) {
    const tx = new EthereumTx(txData)
    tx.sign(privKey)
    return tx
}

function getSignerAddress(signedTx) {
    return '0x' + signedTx.getSenderAddress().toString('hex')
}

const defaultData = {
    generateMnemonic,
    generatePrivKey,
    derivePubKey,
    deriveEthAddress,
    signTx,
    getSignerAddress
};

module.exports = defaultData;
module.exports.default = defaultData;
