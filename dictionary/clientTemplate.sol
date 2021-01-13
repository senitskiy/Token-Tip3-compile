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
