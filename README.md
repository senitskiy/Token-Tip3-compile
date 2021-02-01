
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

$ node deployingWalletToRoot.js [directoryRoot] [numberWallet]

* directoryRoot   = example: tokens/RootTokenTest
* numberWallet    = default [4]
* internalOwner   = example: 0x97c7e2b5fcce2add735074f472f497e2e604c64b67be10a4f430cb9fa685c58e

_example run: node deployingWalletToRoot.js tokens/RootTokenTest_
_example run internal Owner: node deployingWalletToRoot.js tokens/RootTokenTest 1 0x97c7e2b5fcce2add735074f472f497e2e604c64b67be10a4f430cb9fa685c58e_
*run and see .log for current status*

