const exec = require('child_process').exec;

let sudo = require('sudo-js');


let numContract = process.argv[2]||2;
console.log("Количество контрактов: " + numContract);
const { TONClient } = require('ton-client-node-js');

const dotenv = require('dotenv').config();

const sudoPassword = process.env.SUDO_PASSWORD;
sudo.setPassword(sudoPassword);

let options = {check: false, withResult: false};

const arrNumContract = new Array(numContract);

for (let i = 0; i < numContract; i++) {
  arrNumContract[i] = i;
}
function clientCompileContract(i) {
  const command = ['tondev', 'sol', './client' + i, '.sol', '-l', 'js', '-L', 'deploy'];
 
  exec('cp client.sol ./client' + i + '.sol');
  exec('mkdir client' + i);
  exec('cp client.sol ./client' + i + '/client' + i +  '.sol');
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

function TestStorageDeploy() {
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

  if (i != 999999) {
    contractString = './client' + i + '/client' + i + '.Contract.js';
    pathJsonString = './client' + i + '/client' + i + 'Contract.json';
  }
  else {
    contractString = './TestStorage/TestStorageContract.js'; //specify the path to the .js file
    pathJsonString = './TestStorage/TestStorageContract.json'; 
  }

  const contract = require(contractString); //specify the path to the .js file
  const contractPackage = contract.package;
  const abi = contract.package.abi;
  const fs = require('fs');
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
      servers: ['net.ton.dev'],
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
///////////////// deploy Contract Client   //////////////////
//////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////
//////////////////////// RUN /////////////////////////////////////
//////////////////////////////////////////////////////////////////

async function clientCompiledArray(array) {
  for (const item of array) {
    await createdLog(item);
  }

  const TestStorage = await TestStorageDeploy();
  if (TestStorage) {
    exec('mkdir TestStorage');
    exec('cp TestStorage.sol ./TestStorage/TestStorage.sol');
    exec('mv TestStorageContract.js ./TestStorage/TestStorageContract.js');
    exec('mv TestStorage.abi.json ./TestStorage/TestStorage.abi.json');
    exec('mv TestStorage.tvc ./TestStorage/TestStorage.tvc');
  }

  for (let i = 0; i < numContract; i++) {
    // exec('mv /client' + i +  '.sol ' +  './client' + i + '/client' + i +  '.sol');
    exec('mv client' + i + 'Contract.js ./client' + i + '/client' + i +  '.Contract.js');
    exec('mv client' + i + '.abi.json ./client' + i + '/client' + i +  '.abi.json');
    exec('mv client' + i + '.sol ./client' + i + '/client' + i +  '.sol');
    exec('mv client' + i + '.tvc ./client' + i + '/client' + i +  '.tvc');
  }

  for (const item of array) {
    await getContractAddressCurrentClient(item);
  }
  // const res = await getContractAddressForAllClient(array);
  await getContractAddressCurrentClient (999999);
  console.log('Done!');  
}

//////////////////////////////////////
clientCompiledArray(arrNumContract);

//////////////////////////////////////////////////////////////////////////////////////////

// const contract = require('./client' + i + '/client' + i + 'Contract.js'); //specify the path to the .js file
// const contractPackage = contract.package;
// const abi = contract.package.abi;
// const fs = require('fs');
// const pathJson = './client' + i + '/client' + i + 'Contract.json';




// getContractAddressForAllClient(arrNumContract);
