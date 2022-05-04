require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth place home grace only forget gauge'; 
let testAccounts = [
"0xdd09b0948a635d7404e19356c6f2f76e7e9c5153af02ed08db58f04250b205af",
"0x753d421e9244d8e03d159dc1a6ccd9c1d0d236b536f30488b297721e9233f9fb",
"0x1d83fad05d3e40e8b5f1860f4bf0f435cb897a3334a286f5ff8e17b15b8bf406",
"0x137d25748101b225411ed2e0042fb52910fde46e8755f36f77d6ae6c3b76350b",
"0x2afd48d1447d36a3a46660118608a77d7dc95bba8581ce87463c6ca5b3ed907e",
"0x8ef0ba48275b770efcca914467fa2a6a08bcbb4085b58ffb5c8f6dcb11c3fe35",
"0x667de0da5c4dbaefbdb94ba9eaa775e293cdc5fc54ad58f42fec9111ce7adbfc",
"0xb7bd46998dc5b53c38ebc2833d3b47133648a53e343c35726fa4fe2c84afbfba",
"0x2af9eef7649f8b6711facb4d96ce07c391340432e830cbd07eae11a2baef8037",
"0x61d17ffab815b8326e7d394cad5423a64c2005a925617b7803b4475f4b1a80ee"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

