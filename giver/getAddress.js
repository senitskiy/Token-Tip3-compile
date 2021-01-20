const { TONClient } = require('ton-client-node-js');
const fs = require('fs');
async function getContractAddressClient(client) {
  
    let contractString  = '';
    let pathJsonString  = '';
  
    // if (i != 999999) {
      contractString = './giverContract.js';
      pathJsonString = './giverContract.json';
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
  
  (async  () => {
    try {
      const client = await TONClient.create({
        servers: ['net.ton.dev'], //frhb52973ds.ikexpress.com 'net.ton.dev' http://localhost' gql.custler.net
      });
      await getContractAddressClient(client);
      console.log('TON create future address of contract and generate keys for client:\n');
      // process.exit(0);
    } catch (error) {
      console.error(error);
    }
  })();