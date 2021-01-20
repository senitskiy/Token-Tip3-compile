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
			"name": "sendTransaction",
			"inputs": [
				{"name":"dest","type":"address"},
				{"name":"value","type":"uint128"},
				{"name":"bounce","type":"bool"}
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
    imageBase64: 'te6ccgECEAEAAiAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCAQBCvSkIPShBQIJnwAAAAMHBgAnO1E0NP/0z/TANF/+GH4Zvhj+GKAAJT4QsjL//hDzws/+EbPCwDJ7VSACASALCQH+/38h7UTQINdJwgGOENP/0z/TANF/+GH4Zvhj+GKOGPQFcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwGOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNjTHwH4I7zyudMfIQoANsEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83gIBIA0MAMe9Rar5/8ILdHGvaiaBBrpOEAxwhp/+mf6YBov/ww/DN8MfwxRwx6ArgAwCB6B3le64X//DE4fDG4fDM//DDxb3wjeTm4/DNo/CFhgHlwMvwikDdJGDhvfCFdeXAzfAB4AT/8M8AgEgDw4Ar7sV75NfhBbpLwA976QNcNf5XU0dDTf9/XDACV1NHQ0gDf0fhFIG6SMHDe+EK68uBk+AAhIyLIz4WAygBzz0DOAfoCgGnPQM+Bz4HJcPsAXwOS8ALef/hngAYN1wItDXCwOpOADcIccA3CHTHyHdIcEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83g==',
};

class GiverContract {
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

}

GiverContract.package = pkg;

module.exports = GiverContract;
