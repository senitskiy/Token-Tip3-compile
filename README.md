
## Dependencies

    Node.js >= 10.x installed

## Install

$ npm install

## Run

### Deploying token root to the Blockchain

$ node deployingTokenRoot.js [nameRootToken] [symbolRootToken] [decimals] [total_supply] [root_owner]

* nameRootToken   = default [number];
* symbolRootToken = default [number +'symbol'];
* decimals        = default [0];
* total_supply    = default [1000];
* root_owner      = default [0];

_example: node deployingTokenRoot.js Test tst_

*run and see .log for current status*

### Token Root management and deploy wallet

$ node deployingWalletToRoot.js [directoryRoot] [numberWallet] [internalOwner]

* directoryRoot   = example: tokens/RootTokenTest
* numberWallet    = default [4]
* internalOwner   = example: 0x97c7e2b5fcce2add735074f472f497e2e604c64b67be10a4f430cb9fa685c58e

_example run: node deployingWalletToRoot.js tokens/RootTokenTest_

_example run: node deployingWalletToRoot.js tokens/RootTokenTest 5_ 

_example run internal Owner: node deployingWalletToRoot.js tokens/RootTokenTest 1 0x97c7e2b5fcce2add735074f472f497e2e604c64b67be10a4f430cb9fa685c58e_

*run and see .log for current status*



export TVM_WALLET_CODE=`cat code.txt`
./tonos-cli deploy RootTokenContract.tvc '{"name":"77726170706564544f4e","symbol":"77544f4e", "decimals":"9","root_public_key":"0", "root_owner":"0xf927ff6dee96e051fb51e7183c13846a376e549aae29a7a5b699c7ec68a9d213", "wallet_code":"'$TVM_WALLET_CODE'","total_supply":"1101000000000000000"}' --abi RootTokenContract.abi --sign ./tokens/RootTokenwrappedTON/deploy.keys.json --wc 0

WTON
0:bc865dc0b225ec75e158a2e3f862ce6a2398f733930de3fc626643dfdacfb798

USDT
../tonos-cli call 0:b7b17288b1e1c1166797fc40f6329aa598ef720176738769f79fa49c87f50feb grant '{"dest":"0:1fea343b5d48b81c77814857674e022f95262a5851a575d347cb897e9a4b5a60","tokens":"1500000000000","grams":12000000}' --sign ./tokens/RootTokenwrappedUSDT/deploy.keys.json --abi ./RootTokenContract.abi

./tonos-cli run 0:1fea343b5d48b81c77814857674e022f95262a5851a575d347cb897e9a4b5a60 getBalance {} --abi TONTokenWallet.abi

BTC
../tonos-cli call 0:2ffafd25bdc5b322318ca768d8fa9044cf602c4589b02671a430b1ff949173ac grant '{"dest":"0:e2487d8ae9c3daaae234c499e7b94241f579e4169198f06856b3b4298c6c9149","tokens":"8771000","grams":12000000}' --sign ./tokens/RootTokenwrappedBTC/deploy.keys.json --abi ./RootTokenContract.abi

./tonos-cli run 0:e2487d8ae9c3daaae234c499e7b94241f579e4169198f06856b3b4298c6c9149 getBalance {} --abi TONTokenWallet.abi


ETH
../tonos-cli call 0:2e3854dcfa1f1150e3ad3062692e9891650a8915c9982879829b3b47080189aa grant '{"dest":"0:2c0445b1437ee1fac5f859c9b25e014aad7f69a1173a02ea80c03da73539118a","tokens":"280000000","grams":12000000}' --sign ./tokens/RootTokenwrappedETH/deploy.keys.json --abi ./RootTokenContract.abi

./tonos-cli run 0:2c0445b1437ee1fac5f859c9b25e014aad7f69a1173a02ea80c03da73539118a getBalance {} --abi TONTokenWallet.abi

