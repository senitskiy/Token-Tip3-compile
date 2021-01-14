            
        pragma solidity >= 0.6.0;
        pragma AbiHeader expire;
        
        import "./Wallet.sol";
        import "./Interfaces.sol";
        
        /**
        * @title TestStorage with AccessControl and Wallet
        * @dev Store & retrieve value in a variable
        */
        contract TestStorage is
        ////////////////////////////////////////
StoreEmitss, RoleEmitss, 
StoreGeometrids, RoleGeometrids, 

 Wallet { 

uint emitss;
uint geometrids;

    mapping (uint256 => uint256) rolesMap;

    /// @dev Contract constructor.
    constructor() public {
        require(tvm.pubkey() != 0);
        tvm.accept();
    }
    

    ///////// Emitss ////////////
    function setRole0(uint256 roleId) public override onlySuperuser {
        rolesMap[0] = roleId;
    }

    function storeEmitss(uint num) public override onlyMemberOf(rolesMap[0]) {
        emitss = num;
    }   

    function getEmitss() public view alwaysAccept returns (uint current_apples) {
        current_emitss = emitss;
    }

    ////////////////////////////////////////

    ///////// Geometrids ////////////
    function setRole1(uint256 roleId) public override onlySuperuser {
        rolesMap[1] = roleId;
    }

    function storeGeometrids(uint num) public override onlyMemberOf(rolesMap[1]) {
        geometrids = num;
    }   

    function getGeometrids() public view alwaysAccept returns (uint current_apples) {
        current_geometrids = geometrids;
    }

    ////////////////////////////////////////
}