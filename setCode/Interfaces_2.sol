        
    pragma solidity >= 0.6.0;

interface OpenRole {
    function addRole(bytes roleNameHex) external;
}

interface AddMember {
    function addRoleMember(uint256 roleId, address member) external;
}

interface StopMember {
    function closeAccess(uint256 roleId, address member) external;
}

///////// Epizoisms ////////////
interface StoreEpizoisms  {
    function storeEpizoisms (uint value) external;
}

interface RoleEpizoisms  {
    function setRole10(uint256 roleId) external;
}

////////////////////////////////////////

///////// Cockishs ////////////
interface StoreCockishs  {
    function storeCockishs (uint value) external;
}

interface RoleCockishs  {
    function setRole11(uint256 roleId) external;
}

////////////////////////////////////////

///////// Burnetss ////////////
interface StoreBurnetss  {
    function storeBurnetss (uint value) external;
}

interface RoleBurnetss  {
    function setRole12(uint256 roleId) external;
}

////////////////////////////////////////

///////// Wetteds ////////////
interface StoreWetteds  {
    function storeWetteds (uint value) external;
}

interface RoleWetteds  {
    function setRole13(uint256 roleId) external;
}

////////////////////////////////////////

///////// Viewings ////////////
interface StoreViewings  {
    function storeViewings (uint value) external;
}

interface RoleViewings  {
    function setRole14(uint256 roleId) external;
}

////////////////////////////////////////

///////// Funkerss ////////////
interface StoreFunkerss  {
    function storeFunkerss (uint value) external;
}

interface RoleFunkerss  {
    function setRole15(uint256 roleId) external;
}

////////////////////////////////////////

///////// Bulks ////////////
interface StoreBulks  {
    function storeBulks (uint value) external;
}

interface RoleBulks  {
    function setRole16(uint256 roleId) external;
}

////////////////////////////////////////

///////// Grumpishs ////////////
interface StoreGrumpishs  {
    function storeGrumpishs (uint value) external;
}

interface RoleGrumpishs  {
    function setRole17(uint256 roleId) external;
}

////////////////////////////////////////

///////// Doings ////////////
interface StoreDoings  {
    function storeDoings (uint value) external;
}

interface RoleDoings  {
    function setRole18(uint256 roleId) external;
}

////////////////////////////////////////

///////// Phonemicss ////////////
interface StorePhonemicss  {
    function storePhonemicss (uint value) external;
}

interface RolePhonemicss  {
    function setRole19(uint256 roleId) external;
}

