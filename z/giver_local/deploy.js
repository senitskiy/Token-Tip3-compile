const { TONClient } = require('ton-client-node-js');
const contract = require('./giverContract.js'); //specify the path to the .js file   ./giver/giver.js
const contractPackage = contract.package;
const abi = contract.package.abi;
const fs = require('fs');
const pathJson = './giverContract.json';  //'./giver/giver.json'

async function main(client) {
  // Read contract data
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractKeys = contractData.keys;
    // Contract deployment
    const deployAddress = (await client.contracts.deploy({
      package: contract.package,
      constructorParams: {},
      keyPair: contractKeys,
    })).address;
    console.log(`Contract was deployed at address: ${deployAddress}`);
  }catch(err){
    console.log(err);
  }
}

(async () => {
  try {
    const client = await TONClient.create({
      servers: ['http://localhost'], //frhb52973ds.ikexpress.com  'net.ton.dev'
    });
    await main(client);
    console.log('TON main done');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
