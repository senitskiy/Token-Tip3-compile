const exec = require('child_process').exec;
const fs = require('fs');
const hex = require('ascii-hex');

let nameRootToken   = process.argv[2]||+Date.now();
let symbolRootToken = process.argv[3]||Date.now()+'symbol';
let decimals        = process.argv[4]||0;
let total_supply    = process.argv[5]||1000;
let root_owner      = process.argv[6]||0;

console.log("Name root Token: " + nameRootToken);
console.log("Symbol root Token: " + symbolRootToken);
console.log("Decimals: " + decimals);
console.log("Total_supply: " + total_supply);
console.log("Root_owner: " + root_owner);

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

  exec(`./tonos-cli config --retries 45`);
  exec(`./tonos-cli config --timeout 210000`);
  exec(`mkdir ./tokens/RootToken${nameRootToken} | tee ./.log`,  ()=> {
    exec(`./tonos-cli genphrase > ./tokens/RootToken${nameRootToken}/seedphrase | tee ./.log`, 
      function(error, stdout, stderr){                
        if(error) throw error; 

        fs.readFile(`./tokens/RootToken${nameRootToken}/seedphrase`,   "utf8",
          (error, fileContent) => {
            if(error) throw error;
            
            const seedphrase =  fileContent.slice(fileContent.indexOf("\""), fileContent.length-1);
            console.log(seedphrase);
            fs.appendFile(`./tokens/RootToken${nameRootToken}/seedphrase.json`, "{ \"seedphrase\": " + seedphrase  + "}",
              (error) => {
                if (error)
                  throw error;
              });

            exec(`./tonos-cli getkeypair ./tokens/RootToken${nameRootToken}/deploy.keys.json ${seedphrase} | tee ./.log`,
              () => {          
              exec(`./tonos-cli genaddr RootTokenContract.tvc RootTokenContract.abi --setkey ./tokens/RootToken${nameRootToken}/deploy.keys.json --wc 0 > ./tokens/RootToken${nameRootToken}/addr | tee ./.log`,
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
                        exec(`./tonos-cli call ${giverGiverAdress} sendTransaction '{"dest":"${rawAddress}", "value":10000000000, "bounce":false}' --abi ./giver.abi.json --sign ./giver.key.json | tee ./.log`,
                          (error, stdout, stderr) => {
                            if (error) {
                                console.log(`error: ${error.message}`);
                                return;
                            }
                            if (stderr) {
                                console.log(`Ошибка транзакции, см..log. ${stderr}`);
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
                            exec(`./tonos-cli account ${rawAddress} | tee ./.log`,
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
                              // exec(`./tonos-cli deploy RootTokenContract.tvc '{"name":"${nameRootTokenHex}","symbol":"${symbolRootTokenHex}", "decimals":"${decimals}","root_public_key":"0x${contractKeysPublic}", "root_owner":"${root_owner}", "wallet_code":"'${TVM_WALLET_CODE.TVM_WALLET_CODE}'","total_supply":"${total_supply}"}' --abi RootTokenContract.abi --sign ./tokens/RootToken${nameRootToken}/deploy.keys.json --wc 0 | tee ./.log`,
                              //   (error, stdout, stderr) => {
                              //     if (error) {
                              //         console.log(`error: ${error.message}`);
                              //         return;
                              //     }
                              //     if (stderr) {
                              //         console.log(`stderr: ${stderr}`);
                              //         return;
                              //     }
                              //     // console.log(`stdout: ${stdout}`);
                              //     console.log(`Contract deployed at address: ${rawAddress}`);

                              //     const str1 = `./tonos-cli run ${rawAddress} getName {} --abi RootTokenContract.abi`;
                              //     exec(`${str1} + | tee ./.log`, ()=>{console.log(str1)});
                              //     const str2 = `./tonos-cli run ${rawAddress} getSymbol {} --abi RootTokenContract.abi`;
                              //     exec(`${str2} + | tee ./.log`, ()=>{console.log(str2)});
                              //     const str3 = `./tonos-cli run ${rawAddress} getDecimals {} --abi RootTokenContract.abi`;  
                              //     exec(`${str3} + | tee ./.log`, ()=>{console.log(str3)});
                              //     str4 = `./tonos-cli run ${rawAddress} getRootKey {} --abi RootTokenContract.abi`;
                              //     exec(`${str4} + | tee ./.log`, ()=>{console.log(str4)});
                              //     str5 = `./tonos-cli run ${rawAddress} getTotalSupply {} --abi RootTokenContract.abi`;
                              //     exec(`${str5} + | tee ./.log`, ()=>{console.log(str5)});
                              //     str6 = `./tonos-cli run ${rawAddress} getWalletCode {} --abi RootTokenContract.abi`;
                              //     exec(`${str6} + | tee ./.log`, ()=>{console.log(str6)});
                              //     str7 = `./tonos-cli run ${rawAddress} getTotalGranted {} --abi RootTokenContract.abi`;
                              //     exec(`${str7} + | tee ./.log`, ()=>{console.log(str7)});

                              //     // exec(`./tonos-cli account ${rawAddress}`,
                              //     //   (error, stdout, stderr) => {
                              //     //     if (error) {
                              //     //         console.log(`error: ${error.message}`);
                              //     //         return;
                              //     //     }
                              //     //     if (stderr) {
                              //     //         console.log(`stderr: ${stderr}`);
                              //     //         return;
                              //     //     }
                              //     //     console.log(`stdout: ${stdout}`);
                              //     // })
                              // })
                          })                                                                       
                        })
                    });
                  });                  
              });
            });
        });
    });
  }); 
}) ();