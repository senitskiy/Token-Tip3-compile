
// const exec = require('child_process').exec;

// let sudo = require('sudo-js');

// let numContract = process.argv[2]||2;
// console.log("Количество контрактов: " + numContract);
const { TONClient } = require('ton-client-node-js');
const fs = require('fs');

// const dotenv = require('dotenv').config();

// const sudoPassword = process.env.SUDO_PASSWORD;
// sudo.setPassword(sudoPassword);

// let options = {check: false, withResult: false};

// const arrNumContract = new Array(numContract);

// let gasFeeALL = 0;

// const i = ;

async function getContractAddressClient(client) {
  
    const i = "999999_1";
    let contractString  = '';
    let pathJsonString  = '';
  
    // if (i != 999999) {
      contractString = './client' + i + 'Contract.js';
      pathJsonString = './client' + i + 'Contract.json';
    // }
    // else {
    //   contractString = './TestStorage/TestStorageContract.js'; //specify the path to the .js file
    //   pathJsonString = './TestStorage/TestStorageContract.json'; 
    // }
  
    const contract = require(contractString); //specify the path to the .js file
    const contractPackage = contract.package;
    const abi = contract.package.abi;
    // const fs = require('fs');
    const pathJson = pathJsonString;   
  
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
  };
  
  (async () => {
    try {
      const client = await TONClient.create({
        servers: ['gql.custler.net'], //frhb52973ds.ikexpress.com 'net.ton.dev' http://localhost'
      });
      await getContractAddressClient(client);
      console.log('TON create future address of contract and generate keys for client:\n');
      // process.exit(0);
    } catch (error) {
      console.error(error);
    }
  })();