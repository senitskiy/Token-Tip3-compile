
Dependencies

    Node.js >= 10.x installed

Install

$ npm install

Config & Run

Deploying token root to the Blockchain

$ node deployingTokenRoot.js [nameRootToken] [symbolRootToken] [decimals] [total_supply] [root_owner]

nameRootToken   = default [number];
symbolRootToken = default [number +'symbol'];
decimals        = default [0];
total_supply    = default [1000];
root_owner      = default [0];

example: node deployingTokenRoot.js Test tst

$ node deployingWalletToRoot.js [directoryRoot] [numberWallet]

directoryRoot   = example: tokens/RootTokenTest
numberWallet    = default [4]

example run: node deployingWalletToRoot.js tokens/RootTokenTest

