const exec = require('child_process').exec;
const fs = require('fs');
const hex = require('ascii-hex');

let nameRootToken   = process.argv[2]||+Date.now();

let symbolRootToken = process.argv[3]||Date.now()+'symbol';

console.log("Name root Token: " + nameRootToken);
console.log("Symbol root Token: " + symbolRootToken);

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

(() => {

  exec(`./tonos-cli config --retries 30`);
  exec(`./tonos-cli config --timeout 180000`);
  exec(`mkdir ./tokens/RootToken${nameRootToken}`,  ()=> {
    exec(`./tonos-cli genphrase > ./tokens/RootToken${nameRootToken}/seedphrase`, 
      function(error, stdout, stderr){                
        if(error) throw error; 

        fs.readFile(`./tokens/RootToken${nameRootToken}/seedphrase`,   "utf8",
          function(error, fileContent){
            if(error) throw error;
            
            const seedphrase =  fileContent.slice(fileContent.indexOf("\""), fileContent.length-1);
            console.log(seedphrase);
            exec(`./tonos-cli getkeypair ./tokens/RootToken${nameRootToken}/deploy.keys.json ${seedphrase}`,
              () => {          
              exec(`./tonos-cli genaddr RootTokenContract.tvc RootTokenContract.abi --setkey ./tokens/RootToken${nameRootToken}/deploy.keys.json --wc 0 > ./tokens/RootToken${nameRootToken}/addr`,
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
                  
                  fs.readFile(`./tokens/RootToken${nameRootToken}/addr`, "utf8", 
                    (err, addr) => {
                    if(err) throw error;
                    
                    const startAddr = addr.indexOf("0:");
                    rawAddress = addr.slice(startAddr, startAddr+66);
                    console.log(rawAddress);  //"{" + strAddress + "}"
                    
                    fs.appendFile(`./tokens/RootToken${nameRootToken}/address.json`, "{ \"address\": " + "\"" + rawAddress + "\"}" , 
                      function(error){
                        if(error) throw error;
                    
                      // exec(`./tonos-cli account ${rawAddress}`,
                      //   (error, stdout, stderr) => {
                      //     if (error) {
                      //         console.log(`error: ${error.message}`);
                      //         return;
                      //     }
                      //     if (stderr) {
                      //         console.log(`stderr: ${stderr}`);
                      //         return;
                      //     }
                      //   console.log(`stdout: ${stdout}`)
                      
                        // exec(`./tonos-cli call ${giverGiverAdress} sendTransaction '{"dest":"${rawAddress}", "value":1000000000, "bounce":false}' --abi ./giver/giver.abi.json --sign ./giver/giver.key.json`,
                        exec(`./tonos-cli call ${giverGiverAdress} sendTransaction '{"dest":"${rawAddress}", "value":1000000000, "bounce":false}' --abi ./giver.abi.json --sign ./giver.key.json | tee ./send.log`,
                          (error, stdout, stderr) => {
                            if (error) {
                                console.log(`error: ${error.message}`);
                                return;
                            }
                            if (stderr) {
                                console.log(`Ошибка транзакции, см. send.log. ${stderr}`);
                                return;
                            }
                          // console.log(`stdout: ${stdout}`);
                          console.log(`Ton send to: ${rawAddress}`);

                          const contractJson = fs.readFileSync(`./tokens/RootToken${nameRootToken}/deploy.keys.json`,{encoding: "utf8"});
                          const contractData = JSON.parse(contractJson);

                          contractKeysPublic = contractData.public;
                          contractKeysSecret = contractData.secret;

                          console.log(`Key public: ${contractKeysPublic}`);
                          
                          const nameRootTokenHex   = toHex(''+nameRootToken);
                          const symbolRootTokenHex = toHex(symbolRootToken);                                                                                  
                            exec(`./tonos-cli account ${rawAddress}`,
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

                                //546f6b656e41  ${nameRootToken}
                              exec(`./tonos-cli deploy RootTokenContract.tvc '{"name":"${nameRootTokenHex}","symbol":"${symbolRootTokenHex}", "decimals":"0","root_public_key":"0x${contractKeysPublic}", "root_owner":"0", "wallet_code":"'${TVM_WALLET_CODE.TVM_WALLET_CODE}'","total_supply":"1000"}' --abi RootTokenContract.abi --sign ./tokens/RootToken${nameRootToken}/deploy.keys.json --wc 0`,
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
                                  console.log(`Contract deployed at address: ${rawAddress}`);

                                  exec(`./tonos-cli run ${rawAddress} getName {} --abi RootTokenContract.abi`, 
                                    (error, stdout, stderr)=>{console.log(stdout)});
                                  exec(`./tonos-cli run ${rawAddress} getSymbol {} --abi RootTokenContract.abi`, 
                                    (error, stdout, stderr)=>{console.log(stdout)});
                                  exec(`./tonos-cli run ${rawAddress} getDecimals {} --abi RootTokenContract.abi`, 
                                    (error, stdout, stderr)=>{
                                      // console.log(stdout)
                                    });
                                  exec(`./tonos-cli run ${rawAddress} getRootKey {} --abi RootTokenContract.abi`, 
                                    (error, stdout, stderr)=>{console.log(stdout)});
                                  exec(`./tonos-cli run ${rawAddress} getTotalSupply {} --abi RootTokenContract.abi`, 
                                    (error, stdout, stderr)=>{console.log(stdout)});
                                  exec(`./tonos-cli run ${rawAddress} getWalletCode {} --abi RootTokenContract.abi`, 
                                    (error, stdout, stderr)=>{
                                      // console.log(stdout)
                                    });

                                  exec(`./tonos-cli run ${rawAddress}  getTotalGranted {} --abi RootTokenContract.abi`, 
                                    (error, stdout, stderr)=>{console.log(stdout)});

                                  // exec(`./tonos-cli account ${rawAddress}`,
                                  //   (error, stdout, stderr) => {
                                  //     if (error) {
                                  //         console.log(`error: ${error.message}`);
                                  //         return;
                                  //     }
                                  //     if (stderr) {
                                  //         console.log(`stderr: ${stderr}`);
                                  //         return;
                                  //     }
                                  //     console.log(`stdout: ${stdout}`);
                                  // })
                              })
                          })
                        
                         
                      
                        })
                      // });  

                    });
                  });                  
              });
            });
          // ./tonos-cli genaddr RootTokenContract.tvc RootTokenContract.abi --setkey deploy.keys.json --wc 0
        });
    });
  }); 

}) ();