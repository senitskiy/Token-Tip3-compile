const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");
const contract = require('./client999999/client999999.Contract.js'); //specify the path to the .js file
const fs = require('fs');
const pathJson = './client999999/client999999Contract.json';


const paramClient = process.argv[2]||'0_0';
const currentClient = 'client' + paramClient;

const pathJsonClient = './' + currentClient + '/' + currentClient + 'Contract.json';

async function main(client) {
  try{
    const contractJson = fs.readFileSync(pathJson,{encoding: "utf8"});
    const contractData = JSON.parse(contractJson);
    const contractAddress = contractData.address;
    const contractKeys = contractData.keys;
    const clientJson = fs.readFileSync(pathJsonClient,{encoding: "utf8"});
    const clientData = JSON.parse(clientJson);
    const clientAddress = clientData.address;
    const params = {
      send_events: false,
      message_encode_params: {
        address: contractAddress,
        abi: {
          type: 'Contract',
          value: contract.package.abi
        },
        call_set: {
          function_name: 'setSuperuser',
          input: {
            new_superuser: clientAddress,
          }
        },
        signer: {
          type: 'Keys',
          keys: contractKeys }
        }
      };

      let response = await client.processing.process_message(params);
      console.log('setSuperuser tx id: ', response.transaction.id);

      console.log('total_fees: ', parseInt(response.transaction.total_fees, 16)/1000000000);

      const abi = {
        type: 'Contract',
        value: contract.package.abi
      };

      const [account, message] = await Promise.all([
        client.net.query_collection({
          collection: 'accounts',
          filter: { id: { eq: contractAddress } },
          result: 'boc'
        })
        .then(({ result }) => result[0].boc)
        .catch(() => {
          throw Error(`Failed to fetch account data`)
        }),
        client.abi.encode_message({
          abi: {
            type: 'Contract',
            value: contract.package.abi
          },
          address: contractAddress,
          call_set: {
            function_name: 'getSuperuser',
            input: {}
          },
          signer: {
            type: 'Keys',
            keys: contractKeys
          }
        }).then(({ message }) => message)
      ]);

      let response2 = await client.tvm.run_tvm({ message, account, abi });
      console.log('Contract reacted to your getSuperuser:', response2.decoded.output);

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
