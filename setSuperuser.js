const { TONClient } = require('ton-client-node-js');
const contract = require('./TestStorageContract.js'); //specify the path to the .js file
const contractPackage = contract.package;
const abi = contract.package.abi;
const fs = require('fs');
const pathJson = './TestStorageContract.json';
const pathJsonClient = './ClientContract.json';

async function main(client) {
  // Read contract data
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractKeys = contractData.keys;
    const clientJson = fs.readFileSync(pathJsonClient,{encoding: "utf8"});
    const clientData = JSON.parse(clientJson);
    const clientAddress = clientData.address;
    const runMessage = await client.contracts.createRunMessage({
      address: contractAddress,
      abi: abi,
      functionName: 'setSuperuser',
      input: {
        new_superuser: clientAddress,
      },
      keyPair: contractKeys,
    })
    const messageProcessingState = await client.contracts.sendMessage(runMessage.message);
    const result = await client.contracts.waitForRunTransaction(runMessage, messageProcessingState);
    console.log('Response from the contract:', result.output);
    const response = await client.contracts.run({
      address: contractAddress,
      abi: abi,
      functionName: 'getSuperuser',
      input: {},
      keyPair: contractKeys,
    });
    console.log('Response from the contract: ', response.output, ', ', response.transaction.id);
  }catch(err){
    console.log(err);
  }
}

(async () => {
  try {
    const client = await TONClient.create({
      servers: ['net.ton.dev'],
    });
    await main(client);
    console.log('TON done main');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
