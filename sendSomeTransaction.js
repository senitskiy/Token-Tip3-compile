  //////////////////////////////////////////////////////////////////
  ///////////////// send Transaction to Client //////////////////
  //////////////////////////////////////////////////////////////////
 
    const { TONClient } = require('ton-client-node-js');
    const contract = require('./giver/giver.js'); //specify the path to the .js file
    const contractPackage = contract.package;
    const abi = contract.package.abi;
    const fs = require('fs');
    const pathJson = './giver/giver.json';
      
    async function mainSendTransaction(client, i) {
      
      let pathJsonClient = './client'+ i +'/client'+ i +'Contract.json';  //'./giver/giver.json'

      // if (i == 999999) pathJsonClient = './TestStorage/TestStorageContract.json';
  
      const contractJsonClient = fs.readFileSync(pathJsonClient,{encoding: "utf8"});
      const contractDataClient = JSON.parse(contractJsonClient);
      const contractAddressClient = contractDataClient.address;
    
      let dest =  contractAddressClient; 
      let value = 1000000000; //31986001; 30985998 32986001  40000000
      let bounce = false;
      console.log(contractAddressClient);      
            
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
      }catch(err){
        console.log(err);
      }
    }  
    (async () => {
      try {
        const client = await TONClient.create({
          servers: ['gql.custler.net'], //frhb52973ds.ikexpress.com 'net.ton.dev'
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

             await mainSendTransaction(client, item);
             console.log('TON done main');

          // console.log(item);
        }
      
        await mainSendTransaction (client,999999);  
        console.log('TON done main');

        process.exit(0);
      } catch (error) {
        console.error(error);
      }
    })();