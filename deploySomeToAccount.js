//////////////////////////////////////////////////////////////////
///////////////// deploy some to Account //////////////////
////////////////////////////////////////////////////////////////// 
  const { TONClient } = require('ton-client-node-js');
  const fs = require('fs');

async function mainDeploy(client, i) {
  
  // const contract = require('./client0/client0.Contract.js'); //specify the path to the .js file   ./giver/giver.js
  // const contractPackage = contract.package;
  // const abi = contract.package.abi;
  
  // const pathJson = './client0/client0Contract.json'; 


  // const contract = require('./client0/client0.Contract.js');

// let pathJson = '';
// let contract = '';

  // if (i == 999999) {
  //   pathJson = './TestStorage/TestStorageContract.json';
  //   contract = require('./TestStorage/TestStorageContract.js')
  // }
  // else {  
    const pathJson = './client'+ i +'/client'+ i +'Contract.json';  //'./giver/giver.json'
    const contract = require('./client'+ i +'/client'+ i +'.Contract.js');
  // }

  
  // const abi = contract.package.abi;    

  // const contractJsonClient = fs.readFileSync(pathJsonClient,{encoding: "utf8"});
  // const contractDataClient = JSON.parse(contractJsonClient);
  // const contractAddressClient = contractDataClient.address;       

  // Read contract data
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractPackage = contract.package;
    const contractKeys = contractData.keys;

    console.log(contractAddress);
    // Contract deployment
    const deployAddress = (await client.contracts.deploy({
      package: contractPackage,
      constructorParams: {},
      keyPair: contractKeys,
    })).address;
    console.log(`Contract was deployed at address: ${deployAddress}`);


    // const messageProcessingState = await client.contracts.sendMessage(deployAddress.message);
    // const result = await client.contracts.waitForRunTransaction(deployAddress, );
    // console.log(`Transaction id is ${result.transaction.id}`);
    // console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);


    // console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);
  }catch(err){
    console.log(err);
  }
}

(async () => {
  try {
    const client = await TONClient.create({
      servers: ['gql.custler.net'], //frhb52973ds.ikexpress.com  'net.ton.dev'
    });

    let numContract = 2;
    const arrNumContract = new Array(numContract);
    for (let i = 0; i < numContract; i++) {
      arrNumContract[i] = i;
    }
    for (const item of arrNumContract) {
  // for (let i = 0; i < 2; i++) {  
    //await sendTransaction(item)
      //  setTimeout( 
        //  await  sendTransaction(item);

         await mainDeploy (client, item);
         console.log('TON client deploy!');

      // console.log(item);
    }
  
    await mainDeploy (client,999999);  
    console.log('TON Storage deploy!');    

    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();