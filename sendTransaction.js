const { TONClient } = require('ton-client-node-js');
const contract = require('./giver/giver.js'); //specify the path to the .js file
const contractPackage = contract.package;
const abi = contract.package.abi;
const fs = require('fs');
const pathJson = './giver/giver.json';

let dest = '0:cc790135a935d369aa8f99a72290bbd0280cb968618fa7c9e7e78b373ea69c9e'; 
let value = 40000000; //31986001; 30985998 32986001
let bounce = false;


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
      functionName: 'sendTransaction',
      input: {
        dest: dest,
        value: value,
        bounce: bounce,
      },
      keyPair: contractKeys,
    })
    const messageProcessingState = await client.contracts.sendMessage(runMessage.message);
    const result = await client.contracts.waitForRunTransaction(runMessage, messageProcessingState);
    console.log(`Tokens were sent. Transaction id is ${result.transaction.id}`);
    console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);
  }catch(err){
    console.log(err);
  }
}

(async () => {
  try {
    const client = await TONClient.create({
      servers: ['gql.custler.net'], //frhb52973ds.ikexpress.com 'net.ton.dev' 'localhost'
    });
    await main(client);
    console.log('TON done main');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
