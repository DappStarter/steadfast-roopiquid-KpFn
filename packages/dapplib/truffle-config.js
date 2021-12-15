require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn purity hunt knee bottom tip'; 
let testAccounts = [
"0xead7d3d62907c69045c43ca56a90ba36c3fd137c863bb72405607961d487f082",
"0xfea60a54e1bbc74b45e5cc809e8ccbe41436e6673ad7a168512696f6dee4c3c6",
"0xa4e26244a3ae09d430abb45bf8ee6c70ba95889f75450f5b3bce72322c0a1d2b",
"0x343478d6fc98cf2bedba3da99afba4a89845e292fbe6087125c7ec8f49d43c15",
"0x42b0f49556c8855a4102ab13afcafedfc33647d2b204cc3940ca2063c77d5edb",
"0x82c27df80b576b84624b24f221da19d65c9300145d09e234d6cfc2368802bb4d",
"0xc0648095af0593cd0000b7a1036fb28510b7807e6b6b5dd922cdbd358e6e0a64",
"0x4a3fed5ad11be9a43e929ab60de761da36040adf8c7c5123ddd6d53053d6e7fc",
"0x4a0e4e08a1fda31375747e2f5a3483f72cc7eb12ef7ccb0ffad0568f239ee23e",
"0x3e6ac0dfb39dc846f1f7252df26ba878ee13b182d6a57e3148e94c4da34754d8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

