
Dependencies

    Node.js >= 10.x installed

    Docker >= 19.x installed

Install

$ npm install -g ton-dev-cli

$ git clone https://github.com/radianceteam/sc-test-framework

$ npm install

Config & Run

$ create file '.env' from 'templateFor.env' and in sudo password enter

$ node script.js [number_role max 45, defaul 2] [number_member, default 2]

$ sudo password enter in file .env

$ node script.js [number_contract] [number_member]

$ node setSuperUser.js [client_n] 

$ node superuserWork.js [client_n]

$ node testClient.js [client_n]
>>>>>>> 

sc-acl{countTON}

1) deploy contract {count_client  * 0.04 TON} * 0.016~0.038 TON TestStorage
2) setSuperuser.js {count_super_user 0.011 TON}
3) superuserWork.js {count_client * count_Role * 0.029 TON}
    3.1) addRole 		0.009
    3.2) addRoleMember	0.01
    3.3) setRole[i]		0.009
4) testClient.js {count_client * count_Role * 0.01 TON }
    4.1) store[Words]	0.01
    4.2) get[Words]		0