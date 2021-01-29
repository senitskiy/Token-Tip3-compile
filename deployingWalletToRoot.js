"use strict";

const exec = require('child_process').exec;
const fs = require('fs');
const hex = require('ascii-hex');

let directoryRoot       = process.argv[2];
let numberWallet        = process.argv[3]||4;

const arrNumContract = new Array(numberWallet);

for (let i = 0; i < numberWallet; i++) {arrNumContract[i] = i};

// let decimals        = process.argv[4]||0;
// let total_supply    = process.argv[5]||1000;
// let root_owner      = process.argv[6]||0;

// console.log("Name root Token: " + nameRootToken);
// console.log("Symbol root Token: " + symbolRootToken);
// console.log("Decimals: " + decimals);
// console.log("Total_supply: " + total_supply);
// console.log("Root_owner: " + root_owner);

const SERVERS = 'net.ton.dev'; //['gql.custler.net'], //frhb52973ds.ikexpress.com  http://localhost'

const dotenv = require('dotenv').config();

const giverGiverAdress  = process.env.GIVER_ADRESS;
const giverSecretKey    = process.env.GIVER_SECREAT_KEY;
const giverPublicKey    = process.env.GIVER_PUBLIC_KEY;

let rawAddress = '';
let contractKeysPublic;
let contractKeysSecret;

const TVM_WALLET_CODE = require('./code.js');
function toHex(input) {
  let output = '';
  for (i = 0; i < input.length; i ++){output += hex(input[i]).toString(16)}
  return String(output);
}

let gasFeeALL = 0;


function maidDeployWallet  (i)  {

  return new Promise((resolve, reject) => {
    exec(`mkdir ./${directoryRoot}/${i} | tee ./.log`,  ()=> {
      exec(`./tonos-cli genphrase > ./${directoryRoot}/${i}/seedphrase | tee ./.log`, 
        function(error, stdout, stderr){                
          if(error) throw error; 
          // console.log(i);
          
          fs.readFile(`./${directoryRoot}/${i}/seedphrase`,   "utf8",
            function(error, fileContent){
              if(error) throw error;
              
              const seedphrase =  fileContent.slice(fileContent.indexOf("\""), fileContent.length-1);
              console.log(`Wallet ${i}:${seedphrase}`);
              
              exec(`./tonos-cli getkeypair ./${directoryRoot}/${i}/deploy.keys.json ${seedphrase} | tee ./.log`,
                () => {          
                // exec(`./tonos-cli genaddr RootTokenContract.tvc RootTokenContract.abi --setkey ./tokens/RootToken${nameRootToken}/deploy.keys.json --wc 0 > ./tokens/RootToken${nameRootToken}/addr | tee ./.log`,

                const contractJson = fs.readFileSync(`./${directoryRoot}/${i}/deploy.keys.json`,{encoding: "utf8"});
                const contractData = JSON.parse(contractJson);

                contractKeysPublic = contractData.public;
                contractKeysSecret = contractData.secret;

                console.log(`Key public ${i}: ${contractKeysPublic}`);

                const rootContractJson = fs.readFileSync(`./${directoryRoot}/address.json`,{encoding: "utf8"});
                const rootContractData = JSON.parse(rootContractJson);

                const rootAddress = rootContractData.address;

                // console.log(`Root address : ${rootAddress}`);

                exec(`./tonos-cli run ${rootAddress} getWalletAddress '{"workchain_id":"0","pubkey":"0x${contractKeysPublic}", "owner_std_addr":"0"}' --abi RootTokenContract.abi | tee ./.log | tee ./${directoryRoot}/${i}/addr `,


                // ./tonos-cli call 0:e8dd6d66debcebf1b5ccdec4a6f0fb6d717d86c6025f4dd0d545a124de23e357 deployWallet '{"_answer_id":"0", "workchain_id":"0","pubkey":"0x440aa3053784bc823005fe27a92edffc90f3ba23c52e4a6da1f01314363aec52", "internal_owner":"0", "tokens":"1","grams":"2000000000"}' --sign ./tokens/RootTokenTest/deploy.keys.json --abi RootTokenContract.abi

                  (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    // console.log(`stdout: ${stdout}`);
                    
                    fs.readFile(`./${directoryRoot}/${i}/addr`, "utf8", 
                      (err, addr) => {
                      if(err) throw error;
                      
                      const startAddr = addr.indexOf("value0")+10;
                      rawAddress = addr.slice(startAddr, startAddr+66);
                      console.log(`Raw Address: ${rawAddress}`);  //"{" + strAddress + "}"
                      
                      fs.appendFile(`./${directoryRoot}/${i}/address.json`, "{ \"address\": " + "\"" + rawAddress + "\"}" , 
                        function(error){
                          if(error) throw error;              
                          exec(`./tonos-cli call ${giverGiverAdress} sendTransaction '{"dest":"${rawAddress}", "value":3000000000, "bounce":false}' --abi ./giver.abi.json --sign ./giver.key.json | tee ./.log`,
                            (error, stdout, stderr) => {
                              if (error) {
                                  console.log(`error: ${error.message}`);
                                  return;
                              }
                              if (stderr) {
                                  console.log(`Ошибка транзакции, на адрес. ${rawAddress}`);
                                  
                              }
                              else console.log(`TON send to: ${rawAddress} \n`);
                            
                            const rootAddress = require(`./${directoryRoot}/address.json`); //specify the path to the .js file

                            
                            resolve(i);
                            
                            exec(`./tonos-cli call ${directoryRoot} deployWallet '{"_answer_id":"0", "workchain_id":"0","pubkey":"0x440aa3053784bc823005fe27a92edffc90f3ba23c52e4a6da1f01314363aec52", "internal_owner":"0", "tokens":"1","grams":"1000000000"}' --sign ./tokens/RootTokenTest/deploy.keys.json --abi RootTokenContract.abi`,
                            )

    //                         const contractJson = fs.readFileSync(`./tokens/RootToken${nameRootToken}/deploy.keys.json`,{encoding: "utf8"});
    //                         const contractData = JSON.parse(contractJson);

    //                         contractKeysPublic = contractData.public;
    //                         contractKeysSecret = contractData.secret;

    //                         console.log(`Key public: ${contractKeysPublic}`);
                            
    //                         const nameRootTokenHex   = toHex(''+nameRootToken);
    //                         const symbolRootTokenHex = toHex(symbolRootToken);                                                                                  
    //                           exec(`./tonos-cli account ${rawAddress} | tee ./.log`,
    //                           (error, stdout, stderr) => {
    //                             if (error) {
    //                                 console.log(`error: ${error.message}`);
    //                                 return;
    //                             }
    //                             if (stderr) {
    //                                 console.log(`stderr: ${stderr}`);
    //                                 return;
    //                             }
    //                             // console.log(`stdout: ${stdout}`);

    //                               //546f6b656e41  ${nameRootToken}
    //                             exec(`./tonos-cli deploy RootTokenContract.tvc '{"name":"${nameRootTokenHex}","symbol":"${symbolRootTokenHex}", "decimals":"${decimals}","root_public_key":"0x${contractKeysPublic}", "root_owner":"${root_owner}", "wallet_code":"'${TVM_WALLET_CODE.TVM_WALLET_CODE}'","total_supply":"${total_supply}"}' --abi RootTokenContract.abi --sign ./tokens/RootToken${nameRootToken}/deploy.keys.json --wc 0 | tee ./.log`,
    //                               (error, stdout, stderr) => {
    //                                 if (error) {
    //                                     console.log(`error: ${error.message}`);
    //                                     return;
    //                                 }
    //                                 if (stderr) {
    //                                     console.log(`stderr: ${stderr}`);
    //                                     return;
    //                                 }
    //                                 // console.log(`stdout: ${stdout}`);
    //                                 console.log(`Contract deployed at address: ${rawAddress}`);

    //                                 const str1 = `./tonos-cli run ${rawAddress} getName {} --abi RootTokenContract.abi`;
    //                                 exec(`${str1} + | tee ./.log`, ()=>{console.log(str1)});
    //                                 const str2 = `./tonos-cli run ${rawAddress} getSymbol {} --abi RootTokenContract.abi`;
    //                                 exec(`${str2} + | tee ./.log`, ()=>{console.log(str2)});
    //                                 const str3 = `./tonos-cli run ${rawAddress} getDecimals {} --abi RootTokenContract.abi`;  
    //                                 exec(`${str3} + | tee ./.log`, ()=>{console.log(str3)});
    //                                 str4 = `./tonos-cli run ${rawAddress} getRootKey {} --abi RootTokenContract.abi`;
    //                                 exec(`${str4} + | tee ./.log`, ()=>{console.log(str4)});
    //                                 str5 = `./tonos-cli run ${rawAddress} getTotalSupply {} --abi RootTokenContract.abi`;
    //                                 exec(`${str5} + | tee ./.log`, ()=>{console.log(str5)});
    //                                 str6 = `./tonos-cli run ${rawAddress} getWalletCode {} --abi RootTokenContract.abi`;
    //                                 exec(`${str6} + | tee ./.log`, ()=>{console.log(str6)});
    //                                 str7 = `./tonos-cli run ${rawAddress} getTotalGranted {} --abi RootTokenContract.abi`;
    //                                 exec(`${str7} + | tee ./.log`, ()=>{console.log(str7)});

    //                                 // exec(`./tonos-cli account ${rawAddress}`,
    //                                 //   (error, stdout, stderr) => {
    //                                 //     if (error) {
    //                                 //         console.log(`error: ${error.message}`);
    //                                 //         return;
    //                                 //     }
    //                                 //     if (stderr) {
    //                                 //         console.log(`stderr: ${stderr}`);
    //                                 //         return;
    //                                 //     }
    //                                 //     console.log(`stdout: ${stdout}`);
    //                                 // })
    //                             })
    //                         })                                                                       
                          })
                      });
                    });                  
                });
              });
          });
      });
    }); 
  })
}


function maidDeployWallet1  (i)  {

  return new Promise((resolve, reject) => {
    exec(`mkdir ./${directoryRoot}/${i} | tee ./.log`,  ()=> {
      exec(`./tonos-cli genphrase > ./${directoryRoot}/${i}/seedphrase | tee ./.log`, 
        function(error, stdout, stderr){                
          if(error) throw error; 
          console.log(i);
          resolve(i);
      });
    }); 
  }) 
}


(async function () {

  if (!directoryRoot) { console.log('Не задана директория.'); return; }

  fs.stat(directoryRoot, function (err) {
    if (!err) {
      console.log(`directory exists ${directoryRoot}`);
    }
    else if (err.code === 'ENOENT') {
      console.log(`directory ${directoryRoot} does not exist`);
      return;
    }
  });


  exec(`./tonos-cli config --retries 40`);
  exec(`./tonos-cli config --timeout 200000`);

  try{
    for (const item of arrNumContract) {
      const res = await maidDeployWallet(item);
    }
  }
  catch (error) {
    console.error(error);
  }     
}) ();
        