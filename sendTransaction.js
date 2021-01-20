const { TONClient } = require('ton-client-node-js');
const contract = require('./giver/giver.js'); //specify the path to the .js file
const contractPackage = contract.package;
const abi = contract.package.abi;
const fs = require('fs');
const pathJson = './giver/giver.json';

let dest = '0:6c3ef9a29bf8a195c6936a038d516a2ab72bbccf65091da2d45ab757e34edddb'; 
let value = 1000000000; //31986001; 30985998 32986001
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
