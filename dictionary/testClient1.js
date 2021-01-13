const { TONClient } = require('ton-client-node-js');
const contract = require('./Client1Contract.js'); //specify the path to the .js file
const contractPackage = contract.package;
const abi = contract.package.abi;
const fs = require('fs');
const pathJson = './Client1Contract.json';
const core = require('./TestStorageContract.js'); //specify the path to the .js file
const storageAddress = '0:2531180b651c432320b9adee3aac694199b1d8042751a208217688a281f4ce5c';//specify address of the storage

async function main(client) {
  // Read contract data
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractKeys = contractData.keys;
    const runMessage = await client.contracts.createRunMessage({
      address: contractAddress,
      abi: abi,
      functionName: 'storeApples',
      input: {
        storageAddress: storageAddress,
        value: '0x11',
      },
      keyPair: contractKeys,
    })
    const messageProcessingState = await client.contracts.sendMessage(runMessage.message);
    const result = await client.contracts.waitForRunTransaction(runMessage, messageProcessingState);
    console.log('Response from the contract:', result.output);

    const runMessage1 = await client.contracts.createRunMessage({
      address: contractAddress,
      abi: abi,
      functionName: 'storeOranges',
      input: {
        storageAddress: storageAddress,
        value: '0x11'
      },
      keyPair: contractKeys,
    })
    const messageProcessingState1 = await client.contracts.sendMessage(runMessage1.message);
    const result1 = await client.contracts.waitForRunTransaction(runMessage1, messageProcessingState1);
    console.log('Response from the contract:', result1.output);

    const response1 = await client.contracts.run({
      address: storageAddress,
      abi: core.package.abi,
      functionName: 'getApples',
      input: {},
      keyPair: null,
    });
    console.log('Response from the contract: ', response1.output, ', ', response1.transaction.id);

    const response2 = await client.contracts.run({
      address: storageAddress,
      abi: core.package.abi,
      functionName: 'getOranges',
      input: {},
      keyPair: null,
    });
    console.log('Response from the contract: ', response2.output, ', ', response2.transaction.id);


  }catch(err){
    console.log(err);
  }
}

(async () => {
  try {
    const client = await TONClient.create({
      servers: ['gql.custler.net'],
    });
    await main(client);
    console.log('TON done main');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
