            
        pragma solidity >= 0.6.0;
        pragma AbiHeader expire;
        
        import "./Wallet_3.sol";
        import "./Interfaces_3.sol";
        
        /**
        * @title TestStorage with AccessControl and Wallet
        * @dev Store & retrieve value in a variable
        */
        contract TestStorage is
        ////////////////////////////////////////
StoreStoplightss, RoleStoplightss, 
StorePollenosiss, RolePollenosiss, 
StoreReclusivenesss, RoleReclusivenesss, 
StoreGlabellaes, RoleGlabellaes, 
StoreDeclaweds, RoleDeclaweds, 
StoreMoronitiess, RoleMoronitiess, 
StoreDetoxifieds, RoleDetoxifieds, 
StoreInfatuateds, RoleInfatuateds, 
StoreApportioneds, RoleApportioneds, 
StoreSteamships, RoleSteamships, 

 Wallet { 

uint stoplightss;
uint pollenosiss;
uint reclusivenesss;
uint glabellaes;
uint declaweds;
uint moronitiess;
uint detoxifieds;
uint infatuateds;
uint apportioneds;
uint steamships;

    mapping (uint256 => uint256) rolesMap;

    /// @dev Contract constructor.
    constructor() public {
        require(tvm.pubkey() != 0);
        tvm.accept();
    }
    


    ///////// Stoplightss ////////////
    function setRole20(uint256 roleId) public override onlySuperuser {
        rolesMap[20] = roleId;
    }

    function storeStoplightss(uint num) public override onlyMemberOf(rolesMap[20]) {
        stoplightss = num;
    }   

    function getStoplightss() public view alwaysAccept returns (uint current_stoplightss) {
        current_stoplightss = stoplightss;
    }

    ////////////////////////////////////////

    ///////// Pollenosiss ////////////
    function setRole21(uint256 roleId) public override onlySuperuser {
        rolesMap[21] = roleId;
    }

    function storePollenosiss(uint num) public override onlyMemberOf(rolesMap[21]) {
        pollenosiss = num;
    }   

    function getPollenosiss() public view alwaysAccept returns (uint current_pollenosiss) {
        current_pollenosiss = pollenosiss;
    }

    ////////////////////////////////////////

    ///////// Reclusivenesss ////////////
    function setRole22(uint256 roleId) public override onlySuperuser {
        rolesMap[22] = roleId;
    }

    function storeReclusivenesss(uint num) public override onlyMemberOf(rolesMap[22]) {
        reclusivenesss = num;
    }   

    function getReclusivenesss() public view alwaysAccept returns (uint current_reclusivenesss) {
        current_reclusivenesss = reclusivenesss;
    }

    ////////////////////////////////////////

    ///////// Glabellaes ////////////
    function setRole23(uint256 roleId) public override onlySuperuser {
        rolesMap[23] = roleId;
    }

    function storeGlabellaes(uint num) public override onlyMemberOf(rolesMap[23]) {
        glabellaes = num;
    }   

    function getGlabellaes() public view alwaysAccept returns (uint current_glabellaes) {
        current_glabellaes = glabellaes;
    }

    ////////////////////////////////////////

    ///////// Declaweds ////////////
    function setRole24(uint256 roleId) public override onlySuperuser {
        rolesMap[24] = roleId;
    }

    function storeDeclaweds(uint num) public override onlyMemberOf(rolesMap[24]) {
        declaweds = num;
    }   

    function getDeclaweds() public view alwaysAccept returns (uint current_declaweds) {
        current_declaweds = declaweds;
    }

    ////////////////////////////////////////

    ///////// Moronitiess ////////////
    function setRole25(uint256 roleId) public override onlySuperuser {
        rolesMap[25] = roleId;
    }

    function storeMoronitiess(uint num) public override onlyMemberOf(rolesMap[25]) {
        moronitiess = num;
    }   

    function getMoronitiess() public view alwaysAccept returns (uint current_moronitiess) {
        current_moronitiess = moronitiess;
    }

    ////////////////////////////////////////

    ///////// Detoxifieds ////////////
    function setRole26(uint256 roleId) public override onlySuperuser {
        rolesMap[26] = roleId;
    }

    function storeDetoxifieds(uint num) public override onlyMemberOf(rolesMap[26]) {
        detoxifieds = num;
    }   

    function getDetoxifieds() public view alwaysAccept returns (uint current_detoxifieds) {
        current_detoxifieds = detoxifieds;
    }

    ////////////////////////////////////////

    ///////// Infatuateds ////////////
    function setRole27(uint256 roleId) public override onlySuperuser {
        rolesMap[27] = roleId;
    }

    function storeInfatuateds(uint num) public override onlyMemberOf(rolesMap[27]) {
        infatuateds = num;
    }   

    function getInfatuateds() public view alwaysAccept returns (uint current_infatuateds) {
        current_infatuateds = infatuateds;
    }

    ////////////////////////////////////////

    ///////// Apportioneds ////////////
    function setRole28(uint256 roleId) public override onlySuperuser {
        rolesMap[28] = roleId;
    }

    function storeApportioneds(uint num) public override onlyMemberOf(rolesMap[28]) {
        apportioneds = num;
    }   

    function getApportioneds() public view alwaysAccept returns (uint current_apportioneds) {
        current_apportioneds = apportioneds;
    }

    ////////////////////////////////////////

    ///////// Steamships ////////////
    function setRole29(uint256 roleId) public override onlySuperuser {
        rolesMap[29] = roleId;
    }

    function storeSteamships(uint num) public override onlyMemberOf(rolesMap[29]) {
        steamships = num;
    }   

    function getSteamships() public view alwaysAccept returns (uint current_steamships) {
        current_steamships = steamships;
    }

    ////////////////////////////////////////

    ////////////////////////////////////////
}