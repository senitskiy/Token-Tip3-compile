            
        pragma solidity >= 0.6.0;
        pragma AbiHeader expire;
        
        import "./Wallet.sol";
        import "./Interfaces_1.sol";
        
        /**
        * @title TestStorage with AccessControl and Wallet
        * @dev Store & retrieve value in a variable
        */
        contract TestStorage is
        ////////////////////////////////////////
StoreEmitss, RoleEmitss, 
StoreGeometrids, RoleGeometrids, 
StoreUnpedantics, RoleUnpedantics, 
StoreIndigenouslys, RoleIndigenouslys, 
StoreSerfdoms, RoleSerfdoms, 
StoreEmbryons, RoleEmbryons, 
StoreChlorophylls, RoleChlorophylls, 
StoreUnfastidiouss, RoleUnfastidiouss, 
StoreIntercrops, RoleIntercrops, 
StoreSenseiss, RoleSenseiss, 


 Wallet { 

uint emitss;
uint geometrids;
uint unpedantics;
uint indigenouslys;
uint serfdoms;
uint embryons;
uint chlorophylls;
uint unfastidiouss;
uint intercrops;
uint senseiss;

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

    function getEmitss() public view alwaysAccept returns (uint current_emitss) {
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

    function getGeometrids() public view alwaysAccept returns (uint current_geometrids) {
        current_geometrids = geometrids;
    }

    ////////////////////////////////////////

    ///////// Unpedantics ////////////
    function setRole2(uint256 roleId) public override onlySuperuser {
        rolesMap[2] = roleId;
    }

    function storeUnpedantics(uint num) public override onlyMemberOf(rolesMap[2]) {
        unpedantics = num;
    }   

    function getUnpedantics() public view alwaysAccept returns (uint current_unpedantics) {
        current_unpedantics = unpedantics;
    }

    ////////////////////////////////////////

    ///////// Indigenouslys ////////////
    function setRole3(uint256 roleId) public override onlySuperuser {
        rolesMap[3] = roleId;
    }

    function storeIndigenouslys(uint num) public override onlyMemberOf(rolesMap[3]) {
        indigenouslys = num;
    }   

    function getIndigenouslys() public view alwaysAccept returns (uint current_indigenouslys) {
        current_indigenouslys = indigenouslys;
    }

    ////////////////////////////////////////

    ///////// Serfdoms ////////////
    function setRole4(uint256 roleId) public override onlySuperuser {
        rolesMap[4] = roleId;
    }

    function storeSerfdoms(uint num) public override onlyMemberOf(rolesMap[4]) {
        serfdoms = num;
    }   

    function getSerfdoms() public view alwaysAccept returns (uint current_serfdoms) {
        current_serfdoms = serfdoms;
    }

    ////////////////////////////////////////

    ///////// Embryons ////////////
    function setRole5(uint256 roleId) public override onlySuperuser {
        rolesMap[5] = roleId;
    }

    function storeEmbryons(uint num) public override onlyMemberOf(rolesMap[5]) {
        embryons = num;
    }   

    function getEmbryons() public view alwaysAccept returns (uint current_embryons) {
        current_embryons = embryons;
    }

    ////////////////////////////////////////

    ///////// Chlorophylls ////////////
    function setRole6(uint256 roleId) public override onlySuperuser {
        rolesMap[6] = roleId;
    }

    function storeChlorophylls(uint num) public override onlyMemberOf(rolesMap[6]) {
        chlorophylls = num;
    }   

    function getChlorophylls() public view alwaysAccept returns (uint current_chlorophylls) {
        current_chlorophylls = chlorophylls;
    }

    ////////////////////////////////////////

    ///////// Unfastidiouss ////////////
    function setRole7(uint256 roleId) public override onlySuperuser {
        rolesMap[7] = roleId;
    }

    function storeUnfastidiouss(uint num) public override onlyMemberOf(rolesMap[7]) {
        unfastidiouss = num;
    }   

    function getUnfastidiouss() public view alwaysAccept returns (uint current_unfastidiouss) {
        current_unfastidiouss = unfastidiouss;
    }

    ////////////////////////////////////////

    ///////// Intercrops ////////////
    function setRole8(uint256 roleId) public override onlySuperuser {
        rolesMap[8] = roleId;
    }

    function storeIntercrops(uint num) public override onlyMemberOf(rolesMap[8]) {
        intercrops = num;
    }   

    function getIntercrops() public view alwaysAccept returns (uint current_intercrops) {
        current_intercrops = intercrops;
    }

    ////////////////////////////////////////

    ///////// Senseiss ////////////
    function setRole9(uint256 roleId) public override onlySuperuser {
        rolesMap[9] = roleId;
    }

    function storeSenseiss(uint num) public override onlyMemberOf(rolesMap[9]) {
        senseiss = num;
    }   

    function getSenseiss() public view alwaysAccept returns (uint current_senseiss) {
        current_senseiss = senseiss;
    }

    ////////////////////////////////////////

}