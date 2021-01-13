const exec = require('child_process').exec;

let sudo = require('sudo-js');

let numContract = process.argv[2]||2;
console.log("Количество контрактов: " + numContract);
const { TONClient } = require('ton-client-node-js');
const fs = require('fs');

const dotenv = require('dotenv').config();

const sudoPassword = process.env.SUDO_PASSWORD;
sudo.setPassword(sudoPassword);

let options = {check: false, withResult: false};

const arrNumContract = new Array(numContract);

let gasFeeALL = 0;


for (let i = 0; i < numContract; i++) {
  arrNumContract[i] = i;
};

arrNumContract.push(999999);

async function clientCompileContract(i) {
  let command = ['tondev', 'sol', './client' + i, '.sol', '-l', 'js', '-L', 'deploy'];
  exec('mkdir client' + i);
  if (i == 999999) {
    command = ['tondev', 'sol', './client' + i, '.sol', '-l', 'js', '-L', 'deploy'];
    exec('cp TestStorage.sol ./client' + i + '.sol');
    exec('cp client999999.sol ./client' + i + '/client' + i +  '.sol');
  }
  else {    
    exec('cp client.sol ./client' + i + '.sol');
    exec('cp client.sol ./client' + i + '/client' + i +  '.sol');
  }
  return new Promise(function(resolve, reject) {     
    sudo.exec(command, options, function(err, pid, result) {
      if (err) {
        return reject(err);  
      }
      resolve(result);
        // console.log(result); 
    })     
  })  
}; 

async function TestStorageDeploy() {
  const command = ['tondev', 'sol', './TestStorage', '.sol', '-l', 'js', '-L', 'deploy'];
 
  return new Promise(function(resolve, reject) {    
    sudo.exec(command, options, function(err, pid, result) {
      if (err) {
        return reject(err); 
      }
      resolve(result);
      console.log(result); 
    })     
  })  
};

// async function callTestStorageDeploy() {
//   const result = await TestStorageDeploy();
//   console.log(result);
// };

async function createdLog(item) {
  const result = await clientCompileContract(item);
  console.log(result);
}

//////////////////////////////////////////////////////////////////
///////////////// get Contract Address Client   //////////////////
//////////////////////////////////////////////////////////////////
async function getContractAddressClient(client, i) {
  
  let contractString  = '';
  let pathJsonString  = '';

  // if (i != 999999) {
    contractString = './client' + i + '/client' + i + '.Contract.js';
    pathJsonString = './client' + i + '/client' + i + 'Contract.json';
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

async function getContractAddressCurrentClient (i) {
  try {
    const client = await TONClient.create({
      servers: ['gql.custler.net'], //frhb52973ds.ikexpress.com 'net.ton.dev' http://localhost'
    });
    await getContractAddressClient(client, i);
    console.log('TON create future address of contract and generate keys for client:' + i + '\n');
    // process.exit(0);
  } catch (error) {
    console.error(error);
  }
};

// async function getContractAddressForAllClient(array) {
//   for (const item of array) {
//     await getContractAddressCurrentClient(item);
//   }
// };


  //////////////////////////////////////////////////////////////////
  ///////////////// send Transaction to Client //////////////////
  ///////////////////////   begin    //////////////////////////////
  //////////////////////////////////////////////////////////////////
  async function mainSendTransaction(client, i) {
    
    
    const contract = require('./giver/giver.js'); //specify the path to the .js file
    const contractPackage = contract.package;
    const abi = contract.package.abi;
    const pathJson = './giver/giver.json';

    let pathJsonClient = './client'+ i +'/client'+ i +'Contract.json';  //'./giver/giver.json'

    // if (i == 999999) pathJsonClient = './TestStorage/TestStorageContract.json';

    const contractJsonClient = fs.readFileSync(pathJsonClient,{encoding: "utf8"});
    const contractDataClient = JSON.parse(contractJsonClient);
    const contractAddressClient = contractDataClient.address;
  
    let dest =  contractAddressClient; 
    let value = 50000000; //31986001; 30985998 32986001  40000000
    let bounce = false;
    console.log(contractAddressClient);      
    
    let goto = 1;
    do {
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
        
        const gasFee = parseInt(result.fees.gasFee, 16);
        gasFeeALL += gasFee;
        console.log('gasFeeALL: ' + gasFeeALL + "; gasFee: " + gasFee);
        console.log('gasFeeALL: ' + gasFeeALL/1000000000 + "; gasFee: " + gasFee/1000000000);

        goto = 1;
      }catch(err){
        console.log(err);
        goto = 0;
      }
    } while (goto == 0);

  };
  async function sendTransactionAll (arrNumContract) {
    try {
      const client = await TONClient.create({
        servers: ['gql.custler.net'], //frhb52973ds.ikexpress.com 'net.ton.dev'
      });
            
      // let numContract = 2;
      // const arrNumContract = new Array(numContract);
      // for (let i = 0; i < numContract; i++) {
      //   arrNumContract[i] = i;
      // }

      for (const item of arrNumContract) {
      // for (let i = 0; i < 2; i++) {  
      //await sendTransaction(item)
        //  setTimeout( 
          //  await  sendTransaction(item);

           await mainSendTransaction(client, item);
           console.log('TON done main');

      // console.log(item);
      }
    
      // await mainSendTransaction (client, 999999);  
      // console.log('TON done main');

      // process.exit(0);
    } catch (error) {
      console.error(error);
    }
  };
///////////////////////////////////////////////////////////////
///////////////// send Transaction to Client //////////////////
///////////////////////   end    //////////////////////////////
///////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
////////////////// deploy Some Contract Client //////////////////////
//////////////////      begin       ///////////////////////////
/////////////////////////////////////////////////////////////////////////////

// const { TONClient } = require('ton-client-node-js');
// const fs = require('fs');

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
// const contractAddressClient = contractDataClient.address; parseInt(getBalance.balanceGrams, 16);      

let goto = 1;
do {

// Read contract data
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractPackage = contract.package;
    const contractKeys = contractData.keys;

    // // Contract deployment
    // const deployAddress = (await client.contracts.deploy({
    //   package: contractPackage,
    //   constructorParams: {},
    //   keyPair: contractKeys,
    // })).address;
    // console.log(`Contract was deployed at address: ${deployAddress}`);

    const deployAddress = await client.contracts.deploy({
      package: contractPackage,
      constructorParams: {},
      keyPair: contractKeys,
    });
    console.log(`Contract was deployed at address: ${deployAddress.address}`);

    // const messageProcessingState = await client.contracts.sendMessage(deployAddress.message);
    // const result = await client.contracts.waitForRunTransaction(deployAddress, messageProcessingState);
    // console.log(`Deploy!!!. Transaction id is ${result.transaction.id}`);
    // console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);

    // gasFee += parseInt(result.fees.gasFee, 16);

    // const gasFee = parseInt(result.fees.gasFee, 16);
    // gasFeeALL += gasFee;
    // console.log('gasFeeALL: ' + gasFeeALL + "; gasFee: " + gasFee);
    // console.log('gasFeeALL: ' + gasFeeALL/1000000000 + "; gasFee: " + gasFee/1000000000);

    // const messageProcessingState = await client.contracts.sendMessage(deployAddress.message);
    // const result = await client.contracts.waitForRunTransaction(deployAddress, );
    // console.log(`Transaction id is ${result.transaction.id}`);
    // console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);


    // console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);
  // }catch(err){
  //   console.log(err);
  // }


    goto = 1;
  }catch(err){
    console.log(err);
    goto = 0;
  }
  } while (goto == 0);

}

async function deployAll (arrNumContract) {

try {
  const client = await TONClient.create({
    servers: ['gql.custler.net'], //frhb52973ds.ikexpress.com  'net.ton.dev'
  });

  // let numContract = 2;
  // const arrNumContract = new Array(numContract);
  // for (let i = 0; i < numContract; i++) {
  //   arrNumContract[i] = i;
  // }
  for (const item of arrNumContract) {
// for (let i = 0; i < 2; i++) {  
  //await sendTransaction(item)
    //  setTimeout( 
      //  await  sendTransaction(item);
       await mainDeploy (client, item);
       console.log('TON client deploy!');

    // console.log(item);
  }

  // await mainDeploy (client,999999);  
  // console.log('TON Storage deploy!');    

  process.exit(0);
} catch (error) {
  console.error(error);
}
};

/////////////////////////////////////////////////////////////////////////////
//////////////////////////// deploy Some Contract Client //////////////////////
///////////////////////////////       end       ///////////////////////////
/////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////
//////////////////////// MAIN /////////////////////////////////////
//////////////////////////////////////////////////////////////////

async function clientCompiledArray(array) {

  for (const item of array) {
    await createdLog(item);
  }


  for (let i = 0; i < numContract; i++) {
    // exec('mv /client' + i +  '.sol ' +  './client' + i + '/client' + i +  '.sol');
    exec('mv client' + i + 'Contract.js ./client' + i + '/client' + i +  '.Contract.js');
    exec('mv client' + i + '.abi.json ./client' + i + '/client' + i +  '.abi.json');
    exec('mv client' + i + '.sol ./client' + i + '/client' + i +  '.sol');
    exec('mv client' + i + '.tvc ./client' + i + '/client' + i +  '.tvc');
  }

  exec('mv client999999Contract.js ./client999999/client999999.Contract.js');
  exec('mv client999999.abi.json ./client999999/client999999.abi.json');
  exec('mv client999999.sol ./client999999/client999999.sol');
  exec('mv client999999.tvc ./client999999/client999999.tvc');

  // await callTestStorageDeploy(); // TestStorageDeploy();
  
  // exec('mkdir TestStorage');
  // exec('cp client999999.sol ./TestStorage/client999999.sol');    //TestStorage.sol
  // exec('mv client999999Contract.js ./TestStorage/client999999Contract.js'); //TestStorageContract.js
  // exec('mv client999999.abi.json ./TestStorage/client999999.abi.json');    //TestStorage.abi.json
  // exec('mv client999999.tvc ./TestStorage/client999999.tvc');              //TestStorage.tvc

  // const res = await getContractAddressForAllClient(array);
  //await getContractAddressCurrentClient (999999);

  for (const item of array) {
    await getContractAddressCurrentClient(item);
  }

  await sendTransactionAll (array);

  await deployAll (array);


  // for (const item of array) {
  //  sendTransaction(item);
  // }

  // sendTransaction (999999);



  console.log('Done!');  
  
}

//////////////////////////////////////
    clientCompiledArray (arrNumContract);

 

//////////////////////////////////////////////////////////////////////////////////////////

// const contract = require('./client' + i + '/client' + i + 'Contract.js'); //specify the path to the .js file
// const contractPackage = contract.package;
// const abi = contract.package.abi;
// const fs = require('fs');
// const pathJson = './client' + i + '/client' + i + 'Contract.json';




// getContractAddressForAllClient(arrNumContract);
