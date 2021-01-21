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
			"name": "addRole",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleNameHex","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "addRoleMember",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"},
				{"name":"member","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "closeAccess",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"},
				{"name":"member","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole1",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeGeometrids",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
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
    imageBase64: 'te6ccgECGAEAA84AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCAQBCvSkIPShBQIJnwAAAAcHBgAnO1E0NP/0z/TANF/+GH4Zvhj+GKAAJT4QsjL//hDzws/+EbPCwDJ7VSACASALCQH+/38h7UTQINdJwgGOENP/0z/TANF/+GH4Zvhj+GKOGPQFcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwGOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNjTHwH4I7zyudMfIQoANsEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83gIBIBUMAgEgEg0CASAPDgDZuZCD7F8ILdJeAPvfSBrhv/K6mjoaf/v/SDK6mjofSBv6PwikDdJGDhvfCFdeXAzfAARZGfCxGdGggcxLQAAAAAAAAAAAAAAAAAA54tnwOfB5GfIYhDtWxHnhf+RZ4tm5Lj9gC+ByXgDbz/8M8AIBIBEQAMe2LVfP/hBbo417UTQINdJwgGOENP/0z/TANF/+GH4Zvhj+GKOGPQFcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLe+Ebyc3H4ZtH4QsMA8uBl+EUgbpIwcN74Qrry4Gb4APAGf/hngALu3+0hYvhBbpLwB976QNcN/5XU0dDT/9/R+EUgbpIwcN74Qrry4Gb4ACHIz4WIzo0EDmJaAAAAAAAAAAAAAAAAAAHPFs+Bz4HPkOofqS4hzwv/yXH7AFuS8Abef/hngAgFiFBMAu7WCIBX8ILdJeAPvfSBrhv/K6mjoaf/v6PwikDdJGDhvfCFdeXAzfAAQ5GfCxGdGggcxLQAAAAAAAAAAAAAAAAAA54tnwOfA58jqAjjlEOeF/+S4/YAtyXgDbz/8M8AA2bWuTpB8ILdJeAPvfSBrhv/K6mjoaf/v/SDK6mjofSBv6PwikDdJGDhvfCFdeXAzfAARZGfCxGdGggcxLQAAAAAAAAAAAAAAAAAA54tnwOfB5GfIl7b4SxHnhf+RZ4tm5Lj9gC+ByXgDbz/8M8ACASAXFgCnu3tNu2+EFukvAH3vpA1NH4RSBukjBw3vhCuvLgZvgAIcjPhYjOjQQOYloAAAAAAAAAAAAAAAAAAc8Wz4HPgc+QnBoEIiHPFMlx+wBbkvAG3n/4Z4AGDdcCLQ1wsDqTgA3CHHANwh0x8h3SHBAyKCEP////28sZNb8jzgAfAB+EdukzDyPN4=',
};

class Client0_2Contract {
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
     * @param {string} params.storageAddress (address)
     * @param {bytes} params.roleNameHex
     */
    addRole(params) {
        return this.run('addRole', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {bytes} params.roleNameHex
     */
    addRoleLocal(params) {
        return this.runLocal('addRole', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     */
    addRoleMember(params) {
        return this.run('addRoleMember', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     */
    addRoleMemberLocal(params) {
        return this.runLocal('addRoleMember', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     */
    closeAccess(params) {
        return this.run('closeAccess', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     * @param {string} params.member (address)
     */
    closeAccessLocal(params) {
        return this.runLocal('closeAccess', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole1(params) {
        return this.run('setRole1', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole1Local(params) {
        return this.runLocal('setRole1', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeGeometrids(params) {
        return this.run('storeGeometrids', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeGeometridsLocal(params) {
        return this.runLocal('storeGeometrids', params);
    }

}

Client0_2Contract.package = pkg;

module.exports = Client0_2Contract;
