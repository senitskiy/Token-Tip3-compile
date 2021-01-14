        
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
