const { TONClient } = require('ton-client-node-js');
const contract = require('./giverContract.js'); //specify the path to the .js file
const contractPackage = contract.package;
const abi = contract.package.abi;
const fs = require('fs');
const pathJson = './giver.json';

async function main(client) {
  // Generating public and secret key pairs
  let contractKeys = await client.crypto.ed25519Keypair();

  // Receiving future contract address
  const futureAddress = (await client.contracts.createDeployMessage({
    package: contractPackage,
    constructorParams: {},
    keyPair: contractKeys,
  })).address;

  console.log(`Future address of the contract will be: ${futureAddress}`);
  console.log(contractKeys);
  let contractJson = JSON.stringify({address:futureAddress, keys:contractKeys});
  try {
    fs.writeFileSync( pathJson, contractJson,{flag:'a+'});   //'a+' is append mode
    console.log("Future address of the contract  and keys written successfully");
  } catch(err) {
    console.error(err);
  }
}

(async () => {
  try {
    const client = await TONClient.create({
      servers: ['fld.ton.dev'], //frhb52973ds.ikexpress.com
    });
    await main(client);
    console.log('TON create future address of contract and generate keys');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
