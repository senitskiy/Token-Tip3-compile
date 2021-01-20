async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();


    const setCode2Package = await loadPackage.setCode2(abiVersion);


    const setCode2Package = await loadPackage.setCode2(abiVersion);

    const deployed = await tests.deploy_with_giver({
        package: setCodePackage,
        constructorParams: {},
        keyPair: keys,
    });


    const code = await client.getCodeFromImage({
        imageBase64: setCode2Package.imageBase64,
    });
    await contracts.run({
        address: deployed.address,
        functionName: 'main',
        abi: setCodePackage.abi,
        input: { newcode: code.codeBase64 },
        keyPair: keys,
    });
    // const newVersion = await contracts.run({
    //     address: deployed.address,
    //     functionName: 'getNewVersion',
    //     abi: setCode2Package.abi,
    //     input: {},
    //     keyPair: keys,
    // });

    // expect(newVersion.output.value0)
    //     .toEqual('0x2');
};