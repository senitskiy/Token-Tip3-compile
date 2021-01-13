pragma solidity >=0.6.0;
pragma AbiHeader expire;

// import interface 'TestStorage'
import "./Interfaces.sol";

// This contract calls the remote contract function with parameter to store a uint value in the remote contract's
// persistent memory.
contract StorageClient {

	constructor() public {
		// check that contract's public key is set
		require(tvm.pubkey() != 0, 101);
		// Check that message has signature (msg.pubkey() is not zero) and message is signed with the owner's private key
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
	}

	modifier checkOwnerAndAccept {
		// Check that message was signed with contracts key.
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		_;
	}

	function addRole(OpenRole storageAddress, bytes roleNameHex) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.addRole(roleNameHex);
	}

	function addRoleMember(AddMember storageAddress, uint256 roleId, address member) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.addRoleMember(roleId, member);
	}

	function closeAccess(StopMember storageAddress, uint256 roleId, address member) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.closeAccess(roleId, member);
	}

	function setRole1(RoleApples storageAddress, uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole1(roleId);
	}

	function setRole2(RoleOranges storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole2(roleId);
	}

	function setRole3(RoleCoconuts storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole3(roleId);
	}

	function setRole4(RoleMangoes storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole4(roleId);
	}

	function setRole5(RoleBananas storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole5(roleId);
	}

	function setRole6(RoleGrapes storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole6(roleId);
	}

	function setRole7(RoleKiwis storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole7(roleId);
	}

	function setRole8(RoleTangerines storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole8(roleId);
	}

	function setRole9(RoleAvocadas storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole9(roleId);
	}

	function setRole10(RolePapayas storageAddress,uint256 roleId) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.setRole10(roleId);
	}					
						

	function storeApples(StoreApples storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeApples(value);
	}

	function storeOranges(StoreOranges storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeOranges(value);
	}

	function storeCoconuts(StoreCoconuts storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeCoconuts(value);
	}

	function storeMangoes(StoreMangoes storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeMangoes(value);
	}

	function storeBananas(StoreBananas storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeBananas(value);
	}

	function storeGrapes(StoreGrapes storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeGrapes(value);
	}

	function storeKiwis(StoreKiwis storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeKiwis(value);
	}

	function storeTangerines(StoreTangerines storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeTangerines(value);
	}

	function storeAvocadas(StoreAvocadas storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storeAvocadas(value);
	}			

	function storePapayas(StorePapayas storageAddress, uint value) public view checkOwnerAndAccept {
		// Call the remote contract function with parameter.
		storageAddress.storePapayas(value);
	}

}
