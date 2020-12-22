const exec = require('child_process').exec;

let sudo = require('sudo-js');


const dotenv = require('dotenv');

const dotenv = require('sudo-pass');

const sudoPassword = process.env.DB_PASSWORD;
sudo.setPassword(sudoPassword);




let options = {check: false, withResult: false};

const numContract = 3;
const arrNumContract = new Array(numContract);

for (let i = 0; i < numContract; i++) {
  arrNumContract[i] = i;
  // arrNumContract.push(i);
}




// var command = ['tondev', 'sol', './wallet', i, '.sol', '-l', 'js', '-L', 'deploy'];
// sudo.exec(command, options, function(err, pid, result) {
//     console.log(result); // output '';
// });

// const funExec1 = (str) => {
//   return new Promise(function(resolve, reject) {

//     exec(str);  

//   });
// };

// const funExec = (str) => {   
//   return new Promise(function(resolve, reject) {    
//     exec(str, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`exec error: ${error}`);
//         return Promise.reject(error);;
//       }
//       console.log(`stdout: ${stdout}`);
//       console.log(`stderr: ${stderr}`);
//     })
//   })
// }





// async function f1(i) {
//   // const s1 = 'mkdir wallet' + i;
//   // const s2 = 'cp wallet.sol ./wallet' + i + '.sol';
//   // const s3 = 'sudo tondev sol ./wallet' + i + '.sol -l js -L deploy';
//   const command = ['tondev', 'sol', './wallet' + i, '.sol', '-l', 'js', '-L', 'deploy'];

//   // const f1 = await funExec(s1);


//   // try {
//     // const f2 = await funExec(s2);
//     const f3 = await sudo.exec(command, options, function(err, pid, result) {
//       console.log(result); // output '';
//     });
//   // } catch(err) {
//   //   // перехватит любую ошибку в блоке try: и в fetch, и в response.json
//   //   console.log(err);
//   // }

//   // const f2 = await funExec(s2);
//   // // const f3 = funExec(s3);

//   // const f3 = await sudo.exec(command, options, function(err, pid, result) {
//   //   console.log(result); // output '';
//   // });

//   // const a2 = funExec('cp wallet.sol ./wallet' + i + '.sol');
//   // const a3 = funExec('sudo tondev sol ./wallet' + i + '.sol -l js -L deploy');
//   // const a4 = funExec('mv wallet' + i + '.tvc ./wallet' + i + '/wallet' + i +  '.tvc');
//   // const a5 = funExec('mv wallet' + i + 'Contract.js ./wallet' + i + '/wallet' + i +  '.Contract.js');
//   // const a6 = funExec('mv wallet' + i + '.abi.json ./wallet' + i + '/wallet' + i +  '.abi.json');
//   // const a7 = funExec('mv wallet' + i + '.sol ./wallet' + i + '/wallet' + i +  '.sol');
// };

// async function processArray(array) {
//   const promises = array.map(f1);
//   await Promise.all(promises);
//   console.log('Done!');
// }



function delay(i) {
  const command = ['tondev', 'sol', './wallet' + i, '.sol', '-l', 'js', '-L', 'deploy'];
 
  return new Promise(function(resolve, reject) {
    // db.values.insert(value, function(err, user) { // помните, сначала ошибка ;)
    //   if (err) {
    //     return reject(err); // не забудьте return
    //   }
    //   resolve(user);
    // })      
    sudo.exec(command, options, function(err, pid, result) {
      if (err) {
        return reject(err); // не забудьте return
      }
      resolve(result);
        // console.log(result); // output '';
    })     
  });    
}    // setTimeout(resolve, 2000)); 

async function delayedLog(item) {
  const result = await delay(item);
  console.log(result);
}

async function processArray(array) {
  for (const item of array) {
    await delayedLog(item);
  }
  console.log('Done!');  
}

processArray(arrNumContract);

// async function processArray(array) {
//   const promises = array.map(delayedLog);
//   await Promise.all(promises);
//   console.log('Done!');
// }


 // 2, 3, 4, 5]); 



// async function processArray(array) {
//   for (const item of array) {
//     await f1(item);
//   }
//   console.log('Done!');
// }






// for (let i = 0; i < 3; i++) {
//   f1(i);
// }



// function delay() {
//   return new Promise(resolve => setTimeout(resolve, 300));
// }
  
// async function delayedLog(item) {
//   await delay();
//   console.log(item);
// }

// async function processArray(array) {
//   for (const item of array)  {
//     await f1(item);
//   }
//   console.log('Done!');
// }

 




// exec('mkdir wallet'+i);
// .then(function(result) {

//   exec('cp wallet.sol ./wallet' + i + '.sol');
//   return 1;

// });




// const funcExec = (str,i) => {   
//   return new Promise(function(resolve, reject) {    
//     exec(str+i, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//       }
//       console.log(`stdout: ${stdout}`);
//       console.log(`stderr: ${stderr}`);
//     })
//   })
// }
  // .then((result) => {exec('cp wallet.sol ./wallet' + i + '.sol', (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`exec error: ${error}`);
  //     return;
  //   }
  //   console.log(`stdout: ${stdout}`);
  //   console.log(`stderr: ${stderr}`);
  //   })
  // })



// };

// const asyncFuncExec = async (i) => {
//   let res = await funcExec(i);
//   return res;
// };

// for (let i = 0; i < 3; i++) {
  
//   f1(i);

//   // asyncFuncExec(i)
//   //   .then((resolve) => {
//   //       console.log("resolve:" + resolve);
//   //       },
//   //       (reject) => {
//   //       console.log("reject:" + reject);
//   //       })
//   //   .then()
//   //       ;

//   // exec('cp wallet.sol ./wallet' + index + '.sol');

//   //  exec('mkdir wallet' + index);
//   //exec('cp wallet.sol ./wallet' + index + '/wallet' + index +  '.sol');
//   // exec('cp wallet.sol ./wallet' + index + '.sol');
//   //exec('cd wallet' + index);
//   // 
// //   exec('sudo tondev sol wallet' + index + '.sol -l js -L deploy'); 
// //   //exec('sudo tondev sol ./wallet' + index + '/wallet' + index + '.sol -l js -L deploy'); 
// //   //sudo tondev sol ./wallet' + index + '/wallet' + index + '.sol -l js -L deploy

// //   setTimeout(() => exec('mv wallet' + index + '.tvc ./wallet' + index + '/wallet' + index +  '.tvc'), 5000);
// //   //exec('> ./wallet' + index + '/' + index);
// //   //exec('sudo tondev sol ./wallet1/wallet1.sol -l js -L deploy'
// //   setTimeout(() => exec('mv wallet' + index + 'Contract.js ./wallet' + index + '/wallet' + index +  '.Contract.js'), 4000);
// //   setTimeout(() => exec('mv wallet' + index + '.abi.json ./wallet' + index + '/wallet' + index +  '.abi.json'), 5100);
// //   setTimeout(() => exec('mv wallet' + index + '.sol ./wallet' + index + '/wallet' + index +  '.sol'), 10000);
 
// }