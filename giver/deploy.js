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

    const deployAddress = await client.contracts.deploy({
      package: contractPackage,
      constructorParams: {},
      keyPair: contractKeys,
    });
    console.log(`Contract for client was deployed at address: ${deployAddress.address}`);

    // const messageProcessingState = await client.contracts.sendMessage(deployAddress.message);
    // const result = await client.contracts.waitForRunTransaction(deployAddress, messageProcessingState);
    // console.log(`Deploy!!!. Transaction id is ${result.transaction.id}`);
    // console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);

    // gasFee += parseInt(result.fees.gasFee, 16);
    // const gasFee = parseInt(deployAddress.transaction.total_fees, 16);
    // // const gasFee = parseInt(result.fees.gasFee, 16);
    // gasFeeALL += gasFee;
    // console.log('gasFeeALL: ' + gasFeeALL + "; gasFee: " + gasFee);
    // console.log('gasFeeALL: ' + gasFeeALL/1000000000 + "; gasFee: " + gasFee/1000000000);

  }catch(err){
    console.log(err);
  }
}

(async () => {
  try {
    const client = await TONClient.create({
      servers: ['net.ton.dev'], //frhb52973ds.ikexpress.com  'net.ton.dev' gql.custler.net
    });
    await main(client);
    console.log('TON main done');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
