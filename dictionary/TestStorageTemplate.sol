pragma solidity >= 0.6.0;
pragma AbiHeader expire;

import "./Wallet.sol";
import "./Interfaces.sol";

/**
* @title TestStorage with AccessControl and Wallet
* @dev Store & retrieve value in a variable
*/
contract TestStorage is StoreApples, StoreOranges, StoreCoconuts, 
	StoreMangoes, StoreBananas, StoreGrapes, StoreKiwis, 
	StoreTangerines, StoreAvocadas, StorePapayas, 
	RoleApples, RoleOranges, RoleCoconuts, 
	RoleMangoes, RoleBananas, RoleGrapes, RoleKiwis, RoleTangerines, RoleAvocadas, RolePapayas, Wallet {

	uint apples;
	uint oranges;
	uint coconuts;
	uint mangoes;
	uint bananas; 
	uint grapes; 
	uint kiwis; 
	uint tangerines; 
	uint avocadas; 
	uint papayas;

	mapping (uint256 => uint256) rolesMap;

	/// @dev Contract constructor.
	constructor() public {
		require(tvm.pubkey() != 0);
		tvm.accept();
	}

	function setRole1(uint256 roleId) public override onlySuperuser {
		rolesMap[1] = roleId;
	}

	function setRole2(uint256 roleId) public override onlySuperuser {
		rolesMap[2] = roleId;
	}

	function setRole3(uint256 roleId) public override onlySuperuser {
		rolesMap[3] = roleId;
	}

	function setRole4(uint256 roleId) public override onlySuperuser {
		rolesMap[4] = roleId;
	}

	function setRole5(uint256 roleId) public override onlySuperuser {
		rolesMap[5] = roleId;
	}

	function setRole6(uint256 roleId) public override onlySuperuser {
		rolesMap[6] = roleId;
	}

	function setRole7(uint256 roleId) public override onlySuperuser {
		rolesMap[7] = roleId;
	}

	function setRole8(uint256 roleId) public override onlySuperuser {
		rolesMap[8] = roleId;
	}

	function setRole9(uint256 roleId) public override onlySuperuser {
		rolesMap[9] = roleId;
	}

	function setRole10(uint256 roleId) public override onlySuperuser {
		rolesMap[10] = roleId;
	}


	function storeApples(uint num) public override onlyMemberOf(rolesMap[1]) {
		apples = num;
	}

	function storeOranges(uint num) public override onlyMemberOf(rolesMap[2]) {
		oranges = num;
	}

	function storeCoconuts(uint num) public override onlyMemberOf(rolesMap[3]) {
		coconuts = num;
	}

	function storeMangoes(uint num) public override onlyMemberOf(rolesMap[4]) {
		mangoes = num;
	}

	function storeBananas(uint num) public override onlyMemberOf(rolesMap[5]) {
		bananas = num;
	}

	function storeGrapes(uint num) public override onlyMemberOf(rolesMap[6]) {
		grapes = num;
	}

	function storeKiwis(uint num) public override onlyMemberOf(rolesMap[7]) {
		kiwis = num;
	}

	function storeTangerines(uint num) public override onlyMemberOf(rolesMap[8]) {
		tangerines = num;
	}

	function storeAvocadas(uint num) public override onlyMemberOf(rolesMap[9]) {
		avocadas = num;
	}

	function storePapayas(uint num) public override onlyMemberOf(rolesMap[10]) {
		papayas = num;
	}			


	function getApples() public view alwaysAccept returns (uint current_apples) {
		current_apples = apples;
	}

	function getOranges() public view alwaysAccept returns (uint current_oranges) {
		current_oranges = oranges;
	}

	function getCoconuts() public view alwaysAccept returns (uint current_coconuts) {
		current_coconuts = coconuts;
	}

	function getMangoes() public view alwaysAccept returns (uint current_mangoes) {
		current_mangoes = mangoes;
	}

	function getBananas() public view alwaysAccept returns (uint current_bananas) {
		current_bananas = bananas;
	}

	function getGrapes() public view alwaysAccept returns (uint current_grapes) {
		current_grapes = grapes;
	}

	function getKiwis() public view alwaysAccept returns (uint current_kiwis) {
		current_kiwis = kiwis;
	}

	function getTangerines() public view alwaysAccept returns (uint current_tangerines) {
		current_tangerines = tangerines;
	}			

	function getAvocadas() public view alwaysAccept returns (uint current_avocadas) {
		current_avocadas = avocadas;
	}

	function getPapayas() public view alwaysAccept returns (uint current_papayas) {
		current_papayas = papayas;
	}

}
