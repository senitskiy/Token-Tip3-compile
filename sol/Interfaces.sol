pragma solidity >= 0.6.0;

interface StoreApples {
	function storeApples(uint value) external;
}

interface StoreOranges {
	function storeOranges(uint value) external;
}

interface StoreCoconuts {
	function storeCoconuts(uint value) external;
}

interface StoreMangoes {
	function storeMangoes(uint value) external;
}

interface StoreBananas {
	function storeBananas(uint value) external;
}

interface StoreGrapes {
	function storeGrapes(uint value) external;
}

interface StoreKiwis {
	function storeKiwis(uint value) external;
}

interface StoreTangerines {
	function storeTangerines(uint value) external;
}

interface StoreAvocadas {
	function storeAvocadas(uint value) external;
}

interface StorePapayas {
	function storePapayas(uint value) external;
}


interface RoleApples {
	function setRole1(uint256 roleId) external;
}

interface RoleOranges {
	function setRole2(uint256 roleId) external;
}

interface RoleCoconuts {
	function setRole3(uint256 roleId) external;
}

interface RoleMangoes {
	function setRole4(uint256 roleId) external;
}

interface RoleBananas {
	function setRole5(uint256 roleId) external;
}

interface RoleGrapes {
	function setRole6(uint256 roleId) external;
}

interface RoleKiwis {
	function setRole7(uint256 roleId) external;
}

interface RoleTangerines {
	function setRole8(uint256 roleId) external;
}

interface RoleAvocadas {
	function setRole9(uint256 roleId) external;
}

interface RolePapayas {
	function setRole10(uint256 roleId) external;
}


interface OpenRole {
	function addRole(bytes roleNameHex) external;
}

interface AddMember {
	function addRoleMember(uint256 roleId, address member) external;
}

interface StopMember {
	function closeAccess(uint256 roleId, address member) external;
}
