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
