        
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
        
///////// Emitss ////////////
interface StoreEmitss  {
    function storeEmitss (uint value) external;
}

interface RoleEmitss  {
    function setRole0(uint256 roleId) external;
}

////////////////////////////////////////

///////// Geometrids ////////////
interface StoreGeometrids  {
    function storeGeometrids (uint value) external;
}

interface RoleGeometrids  {
    function setRole1(uint256 roleId) external;
}

////////////////////////////////////////

///////// Unpedantics ////////////
interface StoreUnpedantics  {
    function storeUnpedantics (uint value) external;
}

interface RoleUnpedantics  {
    function setRole2(uint256 roleId) external;
}

////////////////////////////////////////

///////// Indigenouslys ////////////
interface StoreIndigenouslys  {
    function storeIndigenouslys (uint value) external;
}

interface RoleIndigenouslys  {
    function setRole3(uint256 roleId) external;
}

////////////////////////////////////////

///////// Serfdoms ////////////
interface StoreSerfdoms  {
    function storeSerfdoms (uint value) external;
}

interface RoleSerfdoms  {
    function setRole4(uint256 roleId) external;
}

////////////////////////////////////////

///////// Embryons ////////////
interface StoreEmbryons  {
    function storeEmbryons (uint value) external;
}

interface RoleEmbryons  {
    function setRole5(uint256 roleId) external;
}

////////////////////////////////////////

///////// Chlorophylls ////////////
interface StoreChlorophylls  {
    function storeChlorophylls (uint value) external;
}

interface RoleChlorophylls  {
    function setRole6(uint256 roleId) external;
}

////////////////////////////////////////

///////// Unfastidiouss ////////////
interface StoreUnfastidiouss  {
    function storeUnfastidiouss (uint value) external;
}

interface RoleUnfastidiouss  {
    function setRole7(uint256 roleId) external;
}

////////////////////////////////////////

///////// Intercrops ////////////
interface StoreIntercrops  {
    function storeIntercrops (uint value) external;
}

interface RoleIntercrops  {
    function setRole8(uint256 roleId) external;
}

////////////////////////////////////////

///////// Senseiss ////////////
interface StoreSenseiss  {
    function storeSenseiss (uint value) external;
}

interface RoleSenseiss  {
    function setRole9(uint256 roleId) external;
}

////////////////////////////////////////