//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setRole0",
			"inputs": [
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeEmitss",
			"inputs": [
				{"name":"num","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "getEmitss",
			"inputs": [
			],
			"outputs": [
				{"name":"current_emitss","type":"uint256"}
			]
		},
		{
			"name": "setRole1",
			"inputs": [
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeGeometrids",
			"inputs": [
				{"name":"num","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "getGeometrids",
			"inputs": [
			],
			"outputs": [
				{"name":"current_geometrids","type":"uint256"}
			]
		},
		{
			"name": "sendTransaction",
			"inputs": [
				{"name":"dest","type":"address"},
				{"name":"value","type":"uint128"},
				{"name":"bounce","type":"bool"}
			],
			"outputs": [
			]
		},
		{
			"name": "isOwner",
			"inputs": [
			],
			"outputs": [
				{"name":"is_owner","type":"bool"}
			]
		},
		{
			"name": "checkAddress",
			"inputs": [
				{"name":"_address","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "setSuperuser",
			"inputs": [
				{"name":"new_superuser","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getSuperuser",
			"inputs": [
			],
			"outputs": [
				{"name":"current_superuser","type":"address"}
			]
		},
		{
			"name": "isSuperuser",
			"inputs": [
			],
			"outputs": [
				{"name":"is_superuser","type":"bool"}
			]
		},
		{
			"name": "checkRoleId",
			"inputs": [
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "hasAccess",
			"inputs": [
				{"name":"roleId","type":"uint256"},
				{"name":"member","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "addRole",
			"inputs": [
				{"name":"roleNameHex","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "addRoleMember",
			"inputs": [
				{"name":"roleId","type":"uint256"},
				{"name":"member","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "closeAccess",
			"inputs": [
				{"name":"roleId","type":"uint256"},
				{"name":"member","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "getRolesLength",
			"inputs": [
			],
			"outputs": [
				{"name":"roles_length","type":"uint256"}
			]
		},
		{
			"name": "getRoleName",
			"inputs": [
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
				{"name":"role_name","type":"bytes"}
			]
		},
		{
			"name": "getRoleMembersById",
			"inputs": [
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
				{"name":"role_members","type":"address[]"}
			]
		},
		{
			"name": "superuser",
			"inputs": [
			],
			"outputs": [
				{"name":"superuser","type":"address"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

const pkg = {
    abi,
    imageBase64: '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',
};

class Client999999Contract {
    /**
    * @param {TONClient} client
    * @param {string} address can be null if contract will be deployed
    * @param {TONKeyPairData} keys
    */
    constructor(client, address, keys) {
        this.client = client;
        this.address = address;
        this.keys = keys;
        this.package = pkg;
        this.abi = abi;
    }

    /**
     */
    async deploy() {
        if (!this.keys) {
            this.keys = await this.client.crypto.ed25519Keypair();
        }
        this.address = (await this.client.contracts.deploy({
            package: pkg,
            constructorParams: {},
            initParams: {},
            keyPair: this.keys,
        })).address;
    }

    /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async run(functionName, input) {
        const result = await this.client.contracts.run({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

   /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async runLocal(functionName, input) {
        const result = await this.client.contracts.runLocal({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     */
    setRole0(params) {
        return this.run('setRole0', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     */
    setRole0Local(params) {
        return this.runLocal('setRole0', params);
    }

    /**
     * @param {object} params
     * @param {string} params.num (uint256)
     */
    storeEmitss(params) {
        return this.run('storeEmitss', params);
    }

    /**
     * @param {object} params
     * @param {string} params.num (uint256)
     */
    storeEmitssLocal(params) {
        return this.runLocal('storeEmitss', params);
    }

    /**
     * @typedef Client999999Contract_getEmitss
     * @type {object}
     * @property {string} current_emitss  (uint256)
     */

    /**
     * @return {Promise.<Client999999Contract_getEmitss>}
     */
    getEmitss() {
        return this.run('getEmitss', {});
    }

    /**
     * @return {Promise.<Client999999Contract_getEmitss>}
     */
    getEmitssLocal() {
        return this.runLocal('getEmitss', {});
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     */
    setRole1(params) {
        return this.run('setRole1', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     */
    setRole1Local(params) {
        return this.runLocal('setRole1', params);
    }

    /**
     * @param {object} params
     * @param {string} params.num (uint256)
     */
    storeGeometrids(params) {
        return this.run('storeGeometrids', params);
    }

    /**
     * @param {object} params
     * @param {string} params.num (uint256)
     */
    storeGeometridsLocal(params) {
        return this.runLocal('storeGeometrids', params);
    }

    /**
     * @typedef Client999999Contract_getGeometrids
     * @type {object}
     * @property {string} current_geometrids  (uint256)
     */

    /**
     * @return {Promise.<Client999999Contract_getGeometrids>}
     */
    getGeometrids() {
        return this.run('getGeometrids', {});
    }

    /**
     * @return {Promise.<Client999999Contract_getGeometrids>}
     */
    getGeometridsLocal() {
        return this.runLocal('getGeometrids', {});
    }

    /**
     * @param {object} params
     * @param {string} params.dest (address)
     * @param {uint128} params.value
     * @param {bool} params.bounce
     */
    sendTransaction(params) {
        return this.run('sendTransaction', params);
    }

    /**
     * @param {object} params
     * @param {string} params.dest (address)
     * @param {uint128} params.value
     * @param {bool} params.bounce
     */
    sendTransactionLocal(params) {
        return this.runLocal('sendTransaction', params);
    }

    /**
     * @typedef Client999999Contract_isOwner
     * @type {object}
     * @property {bool} is_owner 
     */

    /**
     * @return {Promise.<Client999999Contract_isOwner>}
     */
    isOwner() {
        return this.run('isOwner', {});
    }

    /**
     * @return {Promise.<Client999999Contract_isOwner>}
     */
    isOwnerLocal() {
        return this.runLocal('isOwner', {});
    }

    /**
     * @typedef Client999999Contract_checkAddress
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params._address (address)
     * @return {Promise.<Client999999Contract_checkAddress>}
     */
    checkAddress(params) {
        return this.run('checkAddress', params);
    }

    /**
     * @param {object} params
     * @param {string} params._address (address)
     * @return {Promise.<Client999999Contract_checkAddress>}
     */
    checkAddressLocal(params) {
        return this.runLocal('checkAddress', params);
    }

    /**
     * @param {object} params
     * @param {string} params.new_superuser (address)
     */
    setSuperuser(params) {
        return this.run('setSuperuser', params);
    }

    /**
     * @param {object} params
     * @param {string} params.new_superuser (address)
     */
    setSuperuserLocal(params) {
        return this.runLocal('setSuperuser', params);
    }

    /**
     * @typedef Client999999Contract_getSuperuser
     * @type {object}
     * @property {string} current_superuser  (address)
     */

    /**
     * @return {Promise.<Client999999Contract_getSuperuser>}
     */
    getSuperuser() {
        return this.run('getSuperuser', {});
    }

    /**
     * @return {Promise.<Client999999Contract_getSuperuser>}
     */
    getSuperuserLocal() {
        return this.runLocal('getSuperuser', {});
    }

    /**
     * @typedef Client999999Contract_isSuperuser
     * @type {object}
     * @property {bool} is_superuser 
     */

    /**
     * @return {Promise.<Client999999Contract_isSuperuser>}
     */
    isSuperuser() {
        return this.run('isSuperuser', {});
    }

    /**
     * @return {Promise.<Client999999Contract_isSuperuser>}
     */
    isSuperuserLocal() {
        return this.runLocal('isSuperuser', {});
    }

    /**
     * @typedef Client999999Contract_checkRoleId
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @return {Promise.<Client999999Contract_checkRoleId>}
     */
    checkRoleId(params) {
        return this.run('checkRoleId', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @return {Promise.<Client999999Contract_checkRoleId>}
     */
    checkRoleIdLocal(params) {
        return this.runLocal('checkRoleId', params);
    }

    /**
     * @typedef Client999999Contract_hasAccess
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     * @return {Promise.<Client999999Contract_hasAccess>}
     */
    hasAccess(params) {
        return this.run('hasAccess', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     * @return {Promise.<Client999999Contract_hasAccess>}
     */
    hasAccessLocal(params) {
        return this.runLocal('hasAccess', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.roleNameHex
     */
    addRole(params) {
        return this.run('addRole', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.roleNameHex
     */
    addRoleLocal(params) {
        return this.runLocal('addRole', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     */
    addRoleMember(params) {
        return this.run('addRoleMember', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     */
    addRoleMemberLocal(params) {
        return this.runLocal('addRoleMember', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     */
    closeAccess(params) {
        return this.run('closeAccess', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     */
    closeAccessLocal(params) {
        return this.runLocal('closeAccess', params);
    }

    /**
     * @typedef Client999999Contract_getRolesLength
     * @type {object}
     * @property {string} roles_length  (uint256)
     */

    /**
     * @return {Promise.<Client999999Contract_getRolesLength>}
     */
    getRolesLength() {
        return this.run('getRolesLength', {});
    }

    /**
     * @return {Promise.<Client999999Contract_getRolesLength>}
     */
    getRolesLengthLocal() {
        return this.runLocal('getRolesLength', {});
    }

    /**
     * @typedef Client999999Contract_getRoleName
     * @type {object}
     * @property {bytes} role_name 
     */

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @return {Promise.<Client999999Contract_getRoleName>}
     */
    getRoleName(params) {
        return this.run('getRoleName', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @return {Promise.<Client999999Contract_getRoleName>}
     */
    getRoleNameLocal(params) {
        return this.runLocal('getRoleName', params);
    }

    /**
     * @typedef Client999999Contract_getRoleMembersById
     * @type {object}
     * @property {string[]} role_members  (address[])
     */

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @return {Promise.<Client999999Contract_getRoleMembersById>}
     */
    getRoleMembersById(params) {
        return this.run('getRoleMembersById', params);
    }

    /**
     * @param {object} params
     * @param {string} params.roleId (uint256)
     * @return {Promise.<Client999999Contract_getRoleMembersById>}
     */
    getRoleMembersByIdLocal(params) {
        return this.runLocal('getRoleMembersById', params);
    }

    /**
     * @typedef Client999999Contract_superuser
     * @type {object}
     * @property {string} superuser  (address)
     */

    /**
     * @return {Promise.<Client999999Contract_superuser>}
     */
    superuser() {
        return this.run('superuser', {});
    }

    /**
     * @return {Promise.<Client999999Contract_superuser>}
     */
    superuserLocal() {
        return this.runLocal('superuser', {});
    }

}

Client999999Contract.package = pkg;

module.exports = Client999999Contract;
