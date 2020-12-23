const { TONClient } = require('ton-client-node-js');
const fs = require('fs');
const hex = require('ascii-hex');
const contract = require('./ClientContract.js'); //specify the path to the .js file
const contractPackage = contract.package;
const abi = contract.package.abi;
const pathJson = './ClientContract.json';
const storageAddress = '0:2531180b651c432320b9adee3aac694199b1d8042751a208217688a281f4ce5c';
const role1Name = 'writerApples';
const role2Name = 'writerOranges';
const role1Member = '0:8fe67826822b094ede1e74ded405bdff42b417937789cb9dec9cc8e5c7d7b7ec';
const role2Member = '0:a9298015aa55372d7f6def476e699ef548d30ec4439467ab8eeef9e776a39330';

function toHex(input) {
  let output = '';
  for (i = 0; i < input.length; i ++){output += hex(input[i]).toString(16)}
  return String(output);
}

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
      functionName: 'addRole',
      input: {
        storageAddress: storageAddress,
        roleNameHex:  toHex(role1Name),
      },
      keyPair: contractKeys,
    })
    const messageProcessingState = await client.contracts.sendMessage(runMessage.message);
    const result = await client.contracts.waitForRunTransaction(runMessage, messageProcessingState);
    console.log('Response from the contract:', result.output);

    const runMessage0 = await client.contracts.createRunMessage({
      address: contractAddress,
      abi: abi,
      functionName: 'addRole',
      input: {
        storageAddress: storageAddress,
        roleNameHex: toHex(role2Name),
      },
      keyPair: contractKeys,
    })
    const messageProcessingState0 = await client.contracts.sendMessage(runMessage0.message);
    const result0 = await client.contracts.waitForRunTransaction(runMessage0, messageProcessingState0);
    console.log('Response from the contract:', result0.output);

    const runMessage1 = await client.contracts.createRunMessage({
      address: contractAddress,
      abi: abi,
      functionName: 'addRoleMember',
      input: {
        storageAddress: storageAddress,
        roleId: '0x0',
        member: role1Member,
      },
      keyPair: contractKeys,
    })
    const messageProcessingState1 = await client.contracts.sendMessage(runMessage1.message);
    const result1 = await client.contracts.waitForRunTransaction(runMessage1, messageProcessingState1);
    console.log('Response from the contract:', result1.output);

    const runMessage2 = await client.contracts.createRunMessage({
      address: contractAddress,
      abi: abi,
      functionName: 'addRoleMember',
      input: {
        storageAddress: storageAddress,
        roleId: '0x1',
        member: role2Member,
      },
      keyPair: contractKeys,
    })
    const messageProcessingState2 = await client.contracts.sendMessage(runMessage2.message);
    const result2 = await client.contracts.waitForRunTransaction(runMessage2, messageProcessingState2);
    console.log('Response from the contract:', result2.output);

    const runMessage3 = await client.contracts.createRunMessage({
      address: contractAddress,
      abi: abi,
      functionName: 'setRole1',
      input: {
        storageAddress: storageAddress,
        roleId: '0x0',
      },
      keyPair: contractKeys,
    })
    const messageProcessingState3 = await client.contracts.sendMessage(runMessage3.message);
    const result3 = await client.contracts.waitForRunTransaction(runMessage3, messageProcessingState3);
    console.log('Response from the contract:', result3.output);

    const runMessage4 = await client.contracts.createRunMessage({
      address: contractAddress,
      abi: abi,
      functionName: 'setRole2',
      input: {
        storageAddress: storageAddress,
        roleId: '0x1',
      },
      keyPair: contractKeys,
    })
    const messageProcessingState4 = await client.contracts.sendMessage(runMessage4.message);
    const result4 = await client.contracts.waitForRunTransaction(runMessage4, messageProcessingState4);
    console.log('Response from the contract:', result4.output);
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
