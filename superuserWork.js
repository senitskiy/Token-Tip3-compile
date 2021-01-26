const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const fs = require('fs');
const hex = require('ascii-hex');

const paramClient = process.argv[2]||'0_1';
const currentClient = 'client' + paramClient;
// const pathJsonClient = './' + currentClient + '/' + currentClient + 'Contract.json';

const contract = require('./client0_0/client0_0.Contract.js'); //specify the path to the .js file
const pathJson = './client0_0/client0_0Contract.json'; //'./ClientContract.json';
const role1Name = 'writerGeometrids'; //'writerApples';
// const role2Name = 'writerOranges';
const storagePath = './client999999/client999999Contract.json';   //'./TestStorageContract.json';
const role1MemberPath = './' + currentClient + '/' + currentClient + 'Contract.json';  //'./Client1Contract.json';
// const role2MemberPath = './Client2Contract.json';

let gasFeeALL = 0;

function toHex(input) {
  let output = '';
  for (i = 0; i < input.length; i ++){output += hex(input[i]).toString(16)}
  return String(output);
}

function getAddressFromJson(pathTo) {
  let buffer = fs.readFileSync(pathTo,{encoding: "utf8"});
  let data = JSON.parse(buffer);
  return data.address;
}

function getKeysFromJson(pathTo) {
  let buffer = fs.readFileSync(pathTo,{encoding: "utf8"});
  let data = JSON.parse(buffer);
  return data.keys;
}

async function main(client) {
  // Read contract data
  try{
    const contractAddress = getAddressFromJson(pathJson);
    console.log('superuser address: ',contractAddress);
    const contractKeys = getKeysFromJson(pathJson);
    // console.log(contractKeys);
    const storageAddress = getAddressFromJson(storagePath);
    console.log('test storage address: ', storageAddress);
    const role1Member = getAddressFromJson(role1MemberPath);
    console.log('member address for role1: ', role1Member);
    // const role2Member = getAddressFromJson(role2MemberPath);
    // console.log('member address for role2: ', role2Member);

    const paramsAddWriterApples = {
      send_events: false,
      message_encode_params: {
        address: contractAddress,
        abi: {
          type: 'Contract',
          value: contract.package.abi
        },
        call_set: {
          function_name: 'addRole',
          input: {
            storageAddress: storageAddress,
            roleNameHex:  toHex(role1Name),
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
    };

    let responseAddWriterApples = await client.processing.process_message(paramsAddWriterApples);
    console.log('addRole tx id: ', responseAddWriterApples.transaction.id);
    
    const gasFeeaddRole = parseInt(responseAddWriterApples.transaction.total_fees, 16);
    gasFeeALL += gasFeeaddRole;
    console.log('gasFeeALL: ' + gasFeeALL/1000000000 + "; gasFee [addRole]: " + gasFeeaddRole/1000000000);

    const paramsAMTWA = {
      send_events: false,
      message_encode_params: {
        address: contractAddress,
        abi: {
          type: 'Contract',
          value: contract.package.abi
        },
        call_set: {
          function_name: 'addRoleMember',
          input: {
            storageAddress: storageAddress,
            roleId: '0x0',
            member: role1Member,
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
    };

    let responseAMTWA = await client.processing.process_message(paramsAMTWA);
    console.log('addRoleMember tx id: ', responseAMTWA.transaction.id);

    const gasFeeaddRoleMember = parseInt(responseAMTWA.transaction.total_fees, 16);
    gasFeeALL += gasFeeaddRoleMember;
    console.log('gasFeeALL: ' + gasFeeALL/1000000000 + "; gasFee [addRoleMember]: " + gasFeeaddRoleMember/1000000000);

    const paramsSRWA = {
      send_events: false,
      message_encode_params: {
        address: contractAddress,
        abi: {
          type: 'Contract',
          value: contract.package.abi
        },
        call_set: {
          function_name: 'setRole1',
          input: {
            storageAddress: storageAddress,
            roleId: '0x0',
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
    };

    let responseSRWA = await client.processing.process_message(paramsSRWA);
    console.log('setRole1 tx id: ', responseSRWA.transaction.id);

    const gasFeesetRole1 = parseInt(responseSRWA.transaction.total_fees, 16);
    gasFeeALL += gasFeesetRole1;
    console.log('gasFeeALL: ' + gasFeeALL/1000000000 + "; gasFee [addRoleMember]: " + gasFeesetRole1/1000000000);

  }catch(err){
    console.log(err);
  }
}

(async () => {
  try {
    TonClient.useBinaryLibrary(libNode);
    const client = new TonClient({
      network: {
        server_address: 'net.ton.dev'
      }
    });
    console.log("Hello net.ton.dev!");
    await main(client);
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
