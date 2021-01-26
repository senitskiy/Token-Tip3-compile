const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
// const contract = require('./ClientContract.js'); //specify the path to the .js file
const contract = require('./client0_0/client0_0.Contract.js');  //require('./ClientContract.js');
const fs = require('fs');

const paramClient = process.argv[2]||'0_1';
const currentClient = 'client' + paramClient;

const pathJson = './' + currentClient + '/' + currentClient + 'Contract.json'; //'./Client1Contract.json';
const storage =  require('./client999999/client999999.Contract.js');    //require('./TestStorageContract.js'); //specify the path to the .js file
const storagePath = './client999999/client999999Contract.json'; //'./TestStorageContract.json';
const abi = {
  type: 'Contract',
  value: storage.package.abi
};

let gasFeeALL = 0;


async function main(client) {
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractKeys = contractData.keys;
    const storageJson = fs.readFileSync(storagePath,{encoding: "utf8"});
    const storageData = JSON.parse(storageJson);
    const storageAddress = storageData.address;

    const paramsStoreApples = {
      send_events: false,
      message_encode_params: {
        address: contractAddress,
        abi: {
          type: 'Contract',
          value: contract.package.abi
        },
        call_set: {
          function_name: 'storeGeometrids',
          input: {
            storageAddress: storageAddress,
            value: '0x11',
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      };

      let responseStoreApples = await client.processing.process_message(paramsStoreApples);
      console.log('storeGeometrids tx id: ', responseStoreApples.transaction.id);

      const gasFeestoreApples= parseInt(responseStoreApples.transaction.total_fees, 16);
      gasFeeALL += gasFeestoreApples;
      console.log('gasFeeALL: ' + gasFeeALL/1000000000 + "; gasFee [storeWords]: " + gasFeestoreApples/1000000000);

        // const [account, message] = await Promise.all([
        //   client.net.query_collection({
        //     collection: 'accounts',
        //     filter: { id: { eq: storageAddress } },
        //     result: 'boc'
        //   })
        //   .then(({ result }) => result[0].boc)
        //   .catch(() => {
        //     throw Error(`Failed to fetch account data`)
        //   }),
        //   client.abi.encode_message({
        //     abi,
        //     address: storageAddress,
        //     call_set: {
        //       function_name: 'getApples',
        //       input: {}
        //     },
        //     signer: { type: 'None' }
        //   }).then(({ message }) => message)
        // ]);

        // let responseGetApples = await client.tvm.run_tvm({ message, account, abi });
        // console.log('Contract reacted to your getApples:', responseGetApples.decoded.output);


        let resultQC = await client.net.query_collection({
          collection: 'accounts',
          filter: { id: { eq: storageAddress } },
          result: 'boc'
        });
        const  paramsOfEncodeMessage = {
          abi: abi,
          address: storageAddress,
          call_set: {
            function_name: 'getGeometrids',
            input: {}
          },
          signer: { type: 'None' },
        };

        let resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
        const paramsOfRunTvm = {
          message: resultEM.message,
          account: resultQC.result[0].boc,
          abi: abi,
        };

        // const gasFeestoreApples= parseInt(responseStoreApples.transaction.total_fees, 16);
        // gasFeeALL += gasFeestoreApples;
        // console.log('gasFeeALL: ' + gasFeeALL/1000000000 + "; gasFee [storeWords]: " + gasFeestoreApples/1000000000);

        let responseGetOranges = await client.tvm.run_tvm(paramsOfRunTvm);
        console.log('Contract reacted to your getGeometrids:', responseGetOranges.decoded.output);

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
