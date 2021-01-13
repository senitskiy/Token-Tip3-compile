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
			"name": "setRole2",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole3",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole4",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole5",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole6",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole7",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole8",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole9",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRole10",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"roleId","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeApples",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeOranges",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeCoconuts",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeMangoes",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeBananas",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeGrapes",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeKiwis",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeTangerines",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storeAvocadas",
			"inputs": [
				{"name":"storageAddress","type":"address"},
				{"name":"value","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "storePapayas",
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
    imageBase64: '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',
};

class Client0Contract {
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
     * @param {string} params.roleId (uint256)
     */
    setRole2(params) {
        return this.run('setRole2', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole2Local(params) {
        return this.runLocal('setRole2', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole3(params) {
        return this.run('setRole3', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole3Local(params) {
        return this.runLocal('setRole3', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole4(params) {
        return this.run('setRole4', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole4Local(params) {
        return this.runLocal('setRole4', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole5(params) {
        return this.run('setRole5', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole5Local(params) {
        return this.runLocal('setRole5', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole6(params) {
        return this.run('setRole6', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole6Local(params) {
        return this.runLocal('setRole6', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole7(params) {
        return this.run('setRole7', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole7Local(params) {
        return this.runLocal('setRole7', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole8(params) {
        return this.run('setRole8', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole8Local(params) {
        return this.runLocal('setRole8', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole9(params) {
        return this.run('setRole9', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole9Local(params) {
        return this.runLocal('setRole9', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole10(params) {
        return this.run('setRole10', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.roleId (uint256)
     */
    setRole10Local(params) {
        return this.runLocal('setRole10', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeApples(params) {
        return this.run('storeApples', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeApplesLocal(params) {
        return this.runLocal('storeApples', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeOranges(params) {
        return this.run('storeOranges', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeOrangesLocal(params) {
        return this.runLocal('storeOranges', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeCoconuts(params) {
        return this.run('storeCoconuts', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeCoconutsLocal(params) {
        return this.runLocal('storeCoconuts', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeMangoes(params) {
        return this.run('storeMangoes', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeMangoesLocal(params) {
        return this.runLocal('storeMangoes', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeBananas(params) {
        return this.run('storeBananas', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeBananasLocal(params) {
        return this.runLocal('storeBananas', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeGrapes(params) {
        return this.run('storeGrapes', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeGrapesLocal(params) {
        return this.runLocal('storeGrapes', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeKiwis(params) {
        return this.run('storeKiwis', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeKiwisLocal(params) {
        return this.runLocal('storeKiwis', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeTangerines(params) {
        return this.run('storeTangerines', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeTangerinesLocal(params) {
        return this.runLocal('storeTangerines', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeAvocadas(params) {
        return this.run('storeAvocadas', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storeAvocadasLocal(params) {
        return this.runLocal('storeAvocadas', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storePapayas(params) {
        return this.run('storePapayas', params);
    }

    /**
     * @param {object} params
     * @param {string} params.storageAddress (address)
     * @param {string} params.value (uint256)
     */
    storePapayasLocal(params) {
        return this.runLocal('storePapayas', params);
    }

}

Client0Contract.package = pkg;

module.exports = Client0Contract;
