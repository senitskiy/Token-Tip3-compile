            
        pragma solidity >= 0.6.0;
        pragma AbiHeader expire;
        
        import "./Wallet_2.sol";
        import "./Interfaces_2.sol";
        
        /**
        * @title TestStorage with AccessControl and Wallet
        * @dev Store & retrieve value in a variable
        */
        contract TestStorage is
        ////////////////////////////////////////

StoreEpizoisms, RoleEpizoisms, 
StoreCockishs, RoleCockishs, 
StoreBurnetss, RoleBurnetss, 
StoreWetteds, RoleWetteds, 
StoreViewings, RoleViewings, 
StoreFunkerss, RoleFunkerss, 
StoreBulks, RoleBulks, 
StoreGrumpishs, RoleGrumpishs, 
StoreDoings, RoleDoings, 
StorePhonemicss, RolePhonemicss, 

 Wallet { 


uint epizoisms;
uint cockishs;
uint burnetss;
uint wetteds;
uint viewings;
uint funkerss;
uint bulks;
uint grumpishs;
uint doings;
uint phonemicss;


    ///////// Epizoisms ////////////
    function setRole10(uint256 roleId) public override onlySuperuser {
        rolesMap[10] = roleId;
    }

    function storeEpizoisms(uint num) public override onlyMemberOf(rolesMap[10]) {
        epizoisms = num;
    }   

    function getEpizoisms() public view alwaysAccept returns (uint current_epizoisms) {
        current_epizoisms = epizoisms;
    }

    ////////////////////////////////////////

    ///////// Cockishs ////////////
    function setRole11(uint256 roleId) public override onlySuperuser {
        rolesMap[11] = roleId;
    }

    function storeCockishs(uint num) public override onlyMemberOf(rolesMap[11]) {
        cockishs = num;
    }   

    function getCockishs() public view alwaysAccept returns (uint current_cockishs) {
        current_cockishs = cockishs;
    }

    ////////////////////////////////////////

    ///////// Burnetss ////////////
    function setRole12(uint256 roleId) public override onlySuperuser {
        rolesMap[12] = roleId;
    }

    function storeBurnetss(uint num) public override onlyMemberOf(rolesMap[12]) {
        burnetss = num;
    }   

    function getBurnetss() public view alwaysAccept returns (uint current_burnetss) {
        current_burnetss = burnetss;
    }

    ////////////////////////////////////////

    ///////// Wetteds ////////////
    function setRole13(uint256 roleId) public override onlySuperuser {
        rolesMap[13] = roleId;
    }

    function storeWetteds(uint num) public override onlyMemberOf(rolesMap[13]) {
        wetteds = num;
    }   

    function getWetteds() public view alwaysAccept returns (uint current_wetteds) {
        current_wetteds = wetteds;
    }

    ////////////////////////////////////////

    ///////// Viewings ////////////
    function setRole14(uint256 roleId) public override onlySuperuser {
        rolesMap[14] = roleId;
    }

    function storeViewings(uint num) public override onlyMemberOf(rolesMap[14]) {
        viewings = num;
    }   

    function getViewings() public view alwaysAccept returns (uint current_viewings) {
        current_viewings = viewings;
    }

    ////////////////////////////////////////

    ///////// Funkerss ////////////
    function setRole15(uint256 roleId) public override onlySuperuser {
        rolesMap[15] = roleId;
    }

    function storeFunkerss(uint num) public override onlyMemberOf(rolesMap[15]) {
        funkerss = num;
    }   

    function getFunkerss() public view alwaysAccept returns (uint current_funkerss) {
        current_funkerss = funkerss;
    }

    ////////////////////////////////////////

    ///////// Bulks ////////////
    function setRole16(uint256 roleId) public override onlySuperuser {
        rolesMap[16] = roleId;
    }

    function storeBulks(uint num) public override onlyMemberOf(rolesMap[16]) {
        bulks = num;
    }   

    function getBulks() public view alwaysAccept returns (uint current_bulks) {
        current_bulks = bulks;
    }

    ////////////////////////////////////////

    ///////// Grumpishs ////////////
    function setRole17(uint256 roleId) public override onlySuperuser {
        rolesMap[17] = roleId;
    }

    function storeGrumpishs(uint num) public override onlyMemberOf(rolesMap[17]) {
        grumpishs = num;
    }   

    function getGrumpishs() public view alwaysAccept returns (uint current_grumpishs) {
        current_grumpishs = grumpishs;
    }

    ////////////////////////////////////////

    ///////// Doings ////////////
    function setRole18(uint256 roleId) public override onlySuperuser {
        rolesMap[18] = roleId;
    }

    function storeDoings(uint num) public override onlyMemberOf(rolesMap[18]) {
        doings = num;
    }   

    function getDoings() public view alwaysAccept returns (uint current_doings) {
        current_doings = doings;
    }

    ////////////////////////////////////////

    ///////// Phonemicss ////////////
    function setRole19(uint256 roleId) public override onlySuperuser {
        rolesMap[19] = roleId;
    }

    function storePhonemicss(uint num) public override onlyMemberOf(rolesMap[19]) {
        phonemicss = num;
    }   

    function getPhonemicss() public view alwaysAccept returns (uint current_phonemicss) {
        current_phonemicss = phonemicss;
    }

    ////////////////////////////////////////

}