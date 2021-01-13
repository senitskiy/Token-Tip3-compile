let    dictionaryWord = require('./word20.json');
     dictionaryWord = require('./word.json');

const fs = require('fs');

// const    fileSol = require('clientTemplate');
let numContract = process.argv[2]||20;
let numberClients = process.argv[3]||20;

const {resolve} = require('path')

Array.prototype.myUcase = function()
{
    for (var i = 0, len = this.length; i < len; i += 1)
    {
          this[i] = this[i][0].toUpperCase() + this[i].slice(1);
    }
    return this;
};

// const promise1 =  new Promise((resolve,reject) => {
    
//     const fileDel = fs.unlink("client.sol", function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Файл удалён");
//         }
//     })
    
//     if (fileDel) {
//       resolve(fileDel);
//     }
//     else {
//       reject(err);
//     }
// //     // console.log("cp client"+ i + ".sol");
// //   });

// // });

const promiseClient =  new Promise((resolve,reject) => {
    
    // const res = fs.createReadStream('clientTemplate.sol').pipe(fs.createWriteStream('client.sol'));
    
    var fs = require('fs');

    var writer = fs.createWriteStream('client.sol');
    var reader = fs.createReadStream('clientTemplate.sol');
    
    // var fstream = fs.createWriteStream(savePath + file);
    // fstream.once('close',deferred.resolve);
    // stream.pipe(fstream);

    // const closeFile = writeStream.once('close', process.exit);
    // const res = readStream.pipe(closeFile);

    reader.on('close', () => {
        console.log('reader closed');
    });
    
    writer.on('close', () => {
        console.log('writer closed');
        resolve(res);
    });

    res = reader.pipe(writer);

    // res.finished(),
    // res._events.finish()

    // if (res._events.finish()) {
    //   resolve(res);
    // }
    // else {
    //   reject('err');
    // }
    // if (err) {
    //   reject('err')
    // }
});



function copy (source, target, cb) {
    const read = fs.createReadStream(source)
    const write = fs.createWriteStream(target, {flags: 'w'})
  
    function copyit () {
      console.log('copyit')
       
      write.on('error', function (err) {
        console.log('onerror')
        cb(err)
      })
      write.on('close', function () {
        console.log('onclose')
        cb(null)
      })
      read.pipe(write)
    }
  
    read.once('readable', copyit)
    read.on('end', copyit)
  }
  



function copyByStream(src, dest) {
    return new Promise((resolve, reject) => {
      let rs = fs.createReadStream(src);
      let ws = fs.createWriteStream(dest);
  
      rs.once('error', reject);
      ws.once('error', reject);
  
      ws.once('open', fd => {
        ws.once('close', async () => {
          fs.fsync(fd, () => {
            resolve();
          });
        });
      });
  
      rs.pipe(ws);
    });
  }

// const promiseInterfaces =  new Promise((resolve,reject) => {
 
//     var fs = require('fs');

//     var writer = fs.createWriteStream('Interfaces.sol');
//     var reader = fs.createReadStream('InterfacesTemplate.sol');
    
//     // var fstream = fs.createWriteStream(savePath + file);
//     // fstream.once('close',deferred.resolve);
//     // stream.pipe(fstream);

//     // const closeFile = writeStream.once('close', process.exit);
//     // const res = readStream.pipe(closeFile);

//     reader.on('close', () => {
//         console.log('reader closed');
//     });
    
//     writer.on('close', () => {
//         console.log('writer closed');
//         resolve(res);
//     });

//     res = reader.pipe(writer);    



//     // const res = fs.createReadStream('InterfacesTemplate.sol').pipe(fs.createWriteStream('Interfaces.sol'));
    
//     // if (res) {
//     //   resolve(res);
//     // }
//     // else {
//     //   reject('err');
//     // }
// });

// async function f1 () {
//   String.prototype.first2Upper = String.prototype.first2Upper || function(){
//    return this.charAt(0).toUpperCase()+this.slice(1);
//   };
  //usage
//   let Word = 'somestring'.first2Upper();

// try {




 


// console.log(dictionaryWord.myUcase());

// dictionaryWord.myUcase();

// fs1.open('clientTemplate.sol', 'w:', (err) => {
//    if(err) throw err;
//    console.log('File opened!');
// });


// clientTemplateSol.appendFile('clientTemplate.sol', "Привет МИД!", function(error){
//    if(error) throw error; });
    async function clientSolFunc  () {
    for (let i= 0; i < numContract; i++) {
    
    // fs.appendFile('clientTemplate.sol', "Привет МИД!", function(error){
    //    if(error) throw error; });  
    

    //    string1 =`function setRole${1}(RoleApples storageAddress, uint256 roleId) public view checkOwnerAndAccept {\\n
    //                storageAddress.setRole${1}(roleId);\\n
    //             }`;   

    // clientTemplateSol 
    
    // let Word = 'somestring'.first2Upper();
    // if (i != numContract) break;
    
    // let Word; // = item.first2Upper;
        
        const Word = dictionaryWord[i][0].toUpperCase() + dictionaryWord[i].slice(1);

        const Words = Word + 's';

        console.log( i + ": " + dictionaryWord[i] + " :" + Word + ": " + dictionaryWord[i] + "s: "   ); 

        string1 =
        `
    ///////// ${Words} ////////////
    function setRole${i}(Role${Words} storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole${i}(roleId);
    }

    function store${Words}(Store${Words} storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.store${Words}(value);
    }
    ////////////////////////////////////////\n`;
        fs.appendFile('client.sol', string1, function(error){
            if(error) throw error; }); 

    };

     fs.appendFile('client.sol', '}', function(error){
        if(error) throw error; }); 
  
    };
    
   
    async function interfacesSolFunc  () {

        string1 =
        `        
        pragma solidity >= 0.6.0;


        interface OpenRole {
            function addRole(bytes roleNameHex) external;
        }
        
        interface AddMember {
            function addRoleMember(uint256 roleId, address member) external;
        }
        
        interface StopMember {
            function closeAccess(uint256 roleId, address member) external;
        }

        \n`;

        fs.appendFile('Interfaces.sol', string1, function(error){
            if(error) throw error;         


            for (let i= 0; i < numContract; i++) {
            
                const Word = dictionaryWord[i][0].toUpperCase() + dictionaryWord[i].slice(1);

                const Words = Word + 's';

                console.log( i + ": " + dictionaryWord[i] + " :" + Word + ": " + dictionaryWord[i] + "s: "   ); 

                string1 =
            `
///////// ${Words} ////////////
interface Store${Words}  {
    function store${Words} (uint value) external;
}

interface Role${Words}  {
    function setRole${i}(uint256 roleId) external;
}

////////////////////////////////////////\n`;
                fs.appendFile('Interfaces.sol', string1, function(error){
                    if(error) throw error; }); 
            };
        })     
        };
    






    async function testStorageFunc  () {
            
        let string1 =
        `            
        pragma solidity >= 0.6.0;
        pragma AbiHeader expire;
        
        import "./Wallet.sol";
        import "./Interfaces.sol";
        
        /**
        * @title TestStorage with AccessControl and Wallet
        * @dev Store & retrieve value in a variable
        */
        contract TestStorage is
        ////////////////////////////////////////\n`;

        // const fdl = fs.appendFile('TestStorage.sol', string1, {} , function(error){
        //     if(error) throw error;     });   
        
            for (let i= 0; i < numContract; i++) {
            
                const Word = dictionaryWord[i][0].toUpperCase() + dictionaryWord[i].slice(1);

                const Words = Word + 's';

                // console.log( i + ": " + dictionaryWord[i] + " :" + Word + ": " + dictionaryWord[i] + "s: "   ); 

                string1 += `Store${Words}, Role${Words}, \n`; 

                // fs.appendFile('TestStorage.sol', string1, function(error){
                //     if(error) throw error; }); 
            };

            // fs.appendFile('TestStorage.sol', '\n Wallet { \n\n', function(error){
            //     if(error) throw error; }); 
            string1 += '\n Wallet { \n\n';


                for (let i= 0; i < numContract; i++) {
        
                    const Word = dictionaryWord[i][0].toUpperCase() + dictionaryWord[i].slice(1);
        
                    // const words = dictionaryWord[i] + 's';
        
                    // console.log( i + ": " + dictionaryWord[i] + " :" + Word + ": " + dictionaryWord[i] + "s: "   );
                    const words = dictionaryWord[i] + "s"; 
        
                    
                    string1 +=
                `uint ${words};\n`;
                    // fs.appendFile('TestStorage.sol', string1, function(error){
                    //     if(error) throw error; }); 
                };
        
                string1 += `
    mapping (uint256 => uint256) rolesMap;

    /// @dev Contract constructor.
    constructor() public {
        require(tvm.pubkey() != 0);
        tvm.accept();
    }
    \n`;
                
                // fs.appendFile('TestStorage.sol', string1, function(error){
                //     if(error) throw error; }); 
        
        
        
                for (let i= 0; i < numContract; i++) {
            
                    const Word = dictionaryWord[i][0].toUpperCase() + dictionaryWord[i].slice(1);
        
                    // const words = dictionaryWord[i] + 's';
        
                    // console.log( i + ": " + dictionaryWord[i] + " :" + Word + ": " + dictionaryWord[i] + "s: "   );
                    const words = dictionaryWord[i] + "s"; 
                    const Words = Word + 's';
        
        
                    // string1 =`
                    //     ///////// ${Words} ////////////
                    //     interface Store${Words}  {
                    //         function store${Words} (uint value) external;
                    //     }
                        
                    //     interface Role${Words}  {
                    //         function setRole${i}(uint256 roleId) external;
                    //     }
                
                    //     ////////////////////////////////////////\n`;
        
        
                    string1 +=`
    ///////// ${Words} ////////////
    function setRole${i}(uint256 roleId) public override onlySuperuser {
        rolesMap[${i}] = roleId;
    }

    function store${Words}(uint num) public override onlyMemberOf(rolesMap[${i}]) {
        ${words} = num;
    }   

    function get${Words}() public view alwaysAccept returns (uint current_apples) {
        current_${words} = ${words};
    }

    ////////////////////////////////////////\n`;
                    fs.appendFile('TestStorage.sol', string1, function(error){
                        if(error) throw error; }); 
                };


                string1 += '}';

                fs.appendFile('TestStorage.sol', string1, function(error){
                    if(error) throw error; }); 

                // fs.appendFile('TestStorage.sol', '}', function(error){
                //     if(error) throw error; });        
    };    
 






(  () => {   
    
    try {





        const clientSol =  fs.unlink("client.sol",   function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Файл удалён");
                



                // const source = resolve(__dirname, 'clientTemplate.sol')
                // const target = resolve(__dirname, 'client.sol')
                
                // const llj = await copy(source, target, (err) => {
                //   console.log('end', err)
                // });

                // target
                // .then(() => { clientSolFunc() }, () => {} );

                 promiseClient
                // copyByStream('clientTemplate.sol', 'client.sol') 

                .then(
                    (res) => {  
                        // console.log(res) 
                        if (res) 
                         clientSolFunc();
                    },
                    (err) => {
                        console.log(err)  

                    })
            }
        })

        const interfacesSol =  fs.unlink("Interfaces.sol",  function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Файл удалён");
                
                //  promiseInterfaces

                // // copyByStream('InterfacesTemplate.sol', 'Interfaces.sol') 
                // .then(
                //     (res) => {  
                //         // console.log(res) 
                //         if (res) 
                         interfacesSolFunc();
                    // },
                    // (err) => {
                    //     console.log(err)  

                    // })
            }
        })


        const TestStorageSol = fs.unlink("TestStorage.sol", function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Файл удалён");
                testStorageFunc();
                // await promiseInterfaces
                // .then(
                //     (res) => {  
                //         // console.log(res) 
                //         // if (res.closed) 
                    //      interfacesSolFunc();
                    // },
                    // (err) => {
                    //     console.log(err)  

                    // })
            }
        })   

    }
    catch (error) {
        console.error(error +'');
    }
    
})();


