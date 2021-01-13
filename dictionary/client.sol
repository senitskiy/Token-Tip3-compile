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

    ///////// Emitss ////////////
    function setRole0(RoleEmitss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole0(roleId);
    }

    function storeEmitss(StoreEmitss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeEmitss(value);
    }
    ////////////////////////////////////////

    ///////// Geometrids ////////////
    function setRole1(RoleGeometrids storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole1(roleId);
    }

    function storeGeometrids(StoreGeometrids storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeGeometrids(value);
    }
    ////////////////////////////////////////

    ///////// Unpedantics ////////////
    function setRole2(RoleUnpedantics storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole2(roleId);
    }

    function storeUnpedantics(StoreUnpedantics storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeUnpedantics(value);
    }
    ////////////////////////////////////////

    ///////// Indigenouslys ////////////
    function setRole3(RoleIndigenouslys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole3(roleId);
    }

    function storeIndigenouslys(StoreIndigenouslys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeIndigenouslys(value);
    }
    ////////////////////////////////////////

    ///////// Serfdoms ////////////
    function setRole4(RoleSerfdoms storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole4(roleId);
    }

    function storeSerfdoms(StoreSerfdoms storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeSerfdoms(value);
    }
    ////////////////////////////////////////

    ///////// Embryons ////////////
    function setRole5(RoleEmbryons storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole5(roleId);
    }

    function storeEmbryons(StoreEmbryons storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeEmbryons(value);
    }
    ////////////////////////////////////////

    ///////// Chlorophylls ////////////
    function setRole6(RoleChlorophylls storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole6(roleId);
    }

    function storeChlorophylls(StoreChlorophylls storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeChlorophylls(value);
    }
    ////////////////////////////////////////

    ///////// Unfastidiouss ////////////
    function setRole7(RoleUnfastidiouss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole7(roleId);
    }

    function storeUnfastidiouss(StoreUnfastidiouss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeUnfastidiouss(value);
    }
    ////////////////////////////////////////

    ///////// Intercrops ////////////
    function setRole8(RoleIntercrops storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole8(roleId);
    }

    function storeIntercrops(StoreIntercrops storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeIntercrops(value);
    }
    ////////////////////////////////////////

    ///////// Senseiss ////////////
    function setRole9(RoleSenseiss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole9(roleId);
    }

    function storeSenseiss(StoreSenseiss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeSenseiss(value);
    }
    ////////////////////////////////////////

    ///////// Epizoisms ////////////
    function setRole10(RoleEpizoisms storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole10(roleId);
    }

    function storeEpizoisms(StoreEpizoisms storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeEpizoisms(value);
    }
    ////////////////////////////////////////

    ///////// Cockishs ////////////
    function setRole11(RoleCockishs storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole11(roleId);
    }

    function storeCockishs(StoreCockishs storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeCockishs(value);
    }
    ////////////////////////////////////////

    ///////// Burnetss ////////////
    function setRole12(RoleBurnetss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole12(roleId);
    }

    function storeBurnetss(StoreBurnetss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeBurnetss(value);
    }
    ////////////////////////////////////////

    ///////// Wetteds ////////////
    function setRole13(RoleWetteds storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole13(roleId);
    }

    function storeWetteds(StoreWetteds storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeWetteds(value);
    }
    ////////////////////////////////////////

    ///////// Viewings ////////////
    function setRole14(RoleViewings storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole14(roleId);
    }

    function storeViewings(StoreViewings storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeViewings(value);
    }
    ////////////////////////////////////////

    ///////// Funkerss ////////////
    function setRole15(RoleFunkerss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole15(roleId);
    }

    function storeFunkerss(StoreFunkerss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeFunkerss(value);
    }
    ////////////////////////////////////////

    ///////// Bulks ////////////
    function setRole16(RoleBulks storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole16(roleId);
    }

    function storeBulks(StoreBulks storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeBulks(value);
    }
    ////////////////////////////////////////

    ///////// Doings ////////////
    function setRole18(RoleDoings storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole18(roleId);
    }

    function storeDoings(StoreDoings storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeDoings(value);
    }
    ////////////////////////////////////////

    ///////// Grumpishs ////////////
    function setRole17(RoleGrumpishs storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole17(roleId);
    }

    function storeGrumpishs(StoreGrumpishs storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeGrumpishs(value);
    }
    ////////////////////////////////////////

    ///////// Phonemicss ////////////
    function setRole19(RolePhonemicss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole19(roleId);
    }

    function storePhonemicss(StorePhonemicss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storePhonemicss(value);
    }
    ////////////////////////////////////////

    ///////// Stoplightss ////////////
    function setRole20(RoleStoplightss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole20(roleId);
    }

    function storeStoplightss(StoreStoplightss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeStoplightss(value);
    }
    ////////////////////////////////////////

    ///////// Pollenosiss ////////////
    function setRole21(RolePollenosiss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole21(roleId);
    }

    function storePollenosiss(StorePollenosiss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storePollenosiss(value);
    }
    ////////////////////////////////////////

    ///////// Reclusivenesss ////////////
    function setRole22(RoleReclusivenesss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole22(roleId);
    }

    function storeReclusivenesss(StoreReclusivenesss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeReclusivenesss(value);
    }
    ////////////////////////////////////////

    ///////// Glabellaes ////////////
    function setRole23(RoleGlabellaes storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole23(roleId);
    }

    function storeGlabellaes(StoreGlabellaes storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeGlabellaes(value);
    }
    ////////////////////////////////////////

    ///////// Declaweds ////////////
    function setRole24(RoleDeclaweds storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole24(roleId);
    }

    function storeDeclaweds(StoreDeclaweds storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeDeclaweds(value);
    }
    ////////////////////////////////////////

    ///////// Moronitiess ////////////
    function setRole25(RoleMoronitiess storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole25(roleId);
    }

    function storeMoronitiess(StoreMoronitiess storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeMoronitiess(value);
    }
    ////////////////////////////////////////

    ///////// Detoxifieds ////////////
    function setRole26(RoleDetoxifieds storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole26(roleId);
    }

    function storeDetoxifieds(StoreDetoxifieds storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeDetoxifieds(value);
    }
    ////////////////////////////////////////

    ///////// Infatuateds ////////////
    function setRole27(RoleInfatuateds storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole27(roleId);
    }

    function storeInfatuateds(StoreInfatuateds storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeInfatuateds(value);
    }
    ////////////////////////////////////////

    ///////// Apportioneds ////////////
    function setRole28(RoleApportioneds storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole28(roleId);
    }

    function storeApportioneds(StoreApportioneds storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeApportioneds(value);
    }
    ////////////////////////////////////////

    ///////// Steamships ////////////
    function setRole29(RoleSteamships storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole29(roleId);
    }

    function storeSteamships(StoreSteamships storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeSteamships(value);
    }
    ////////////////////////////////////////

    ///////// Allegiances ////////////
    function setRole30(RoleAllegiances storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole30(roleId);
    }

    function storeAllegiances(StoreAllegiances storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeAllegiances(value);
    }
    ////////////////////////////////////////

    ///////// Orderlesss ////////////
    function setRole31(RoleOrderlesss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole31(roleId);
    }

    function storeOrderlesss(StoreOrderlesss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeOrderlesss(value);
    }
    ////////////////////////////////////////

    ///////// Slobbishs ////////////
    function setRole32(RoleSlobbishs storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole32(roleId);
    }

    function storeSlobbishs(StoreSlobbishs storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeSlobbishs(value);
    }
    ////////////////////////////////////////

    ///////// Equinoxess ////////////
    function setRole33(RoleEquinoxess storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole33(roleId);
    }

    function storeEquinoxess(StoreEquinoxess storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeEquinoxess(value);
    }
    ////////////////////////////////////////

    ///////// Greaserss ////////////
    function setRole34(RoleGreaserss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole34(roleId);
    }

    function storeGreaserss(StoreGreaserss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeGreaserss(value);
    }
    ////////////////////////////////////////

    ///////// Scootss ////////////
    function setRole35(RoleScootss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole35(roleId);
    }

    function storeScootss(StoreScootss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeScootss(value);
    }
    ////////////////////////////////////////

    ///////// Dabbings ////////////
    function setRole36(RoleDabbings storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole36(roleId);
    }

    function storeDabbings(StoreDabbings storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeDabbings(value);
    }
    ////////////////////////////////////////

    ///////// Cliftss ////////////
    function setRole37(RoleCliftss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole37(roleId);
    }

    function storeCliftss(StoreCliftss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeCliftss(value);
    }
    ////////////////////////////////////////

    ///////// Clipsheetss ////////////
    function setRole38(RoleClipsheetss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole38(roleId);
    }

    function storeClipsheetss(StoreClipsheetss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeClipsheetss(value);
    }
    ////////////////////////////////////////

    ///////// Deveinings ////////////
    function setRole39(RoleDeveinings storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole39(roleId);
    }

    function storeDeveinings(StoreDeveinings storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeDeveinings(value);
    }
    ////////////////////////////////////////

    ///////// Salalss ////////////
    function setRole40(RoleSalalss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole40(roleId);
    }

    function storeSalalss(StoreSalalss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeSalalss(value);
    }
    ////////////////////////////////////////

    ///////// Collaterals ////////////
    function setRole41(RoleCollaterals storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole41(roleId);
    }

    function storeCollaterals(StoreCollaterals storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeCollaterals(value);
    }
    ////////////////////////////////////////

    ///////// Presumptions ////////////
    function setRole42(RolePresumptions storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole42(roleId);
    }

    function storePresumptions(StorePresumptions storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storePresumptions(value);
    }
    ////////////////////////////////////////

    ///////// Taxinglys ////////////
    function setRole43(RoleTaxinglys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole43(roleId);
    }

    function storeTaxinglys(StoreTaxinglys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeTaxinglys(value);
    }
    ////////////////////////////////////////

    ///////// Stabss ////////////
    function setRole44(RoleStabss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole44(roleId);
    }

    function storeStabss(StoreStabss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeStabss(value);
    }
    ////////////////////////////////////////

    ///////// Statutorilys ////////////
    function setRole45(RoleStatutorilys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole45(roleId);
    }

    function storeStatutorilys(StoreStatutorilys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeStatutorilys(value);
    }
    ////////////////////////////////////////

    ///////// Bloviations ////////////
    function setRole46(RoleBloviations storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole46(roleId);
    }

    function storeBloviations(StoreBloviations storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeBloviations(value);
    }
    ////////////////////////////////////////

    ///////// Periphrasess ////////////
    function setRole47(RolePeriphrasess storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole47(roleId);
    }

    function storePeriphrasess(StorePeriphrasess storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storePeriphrasess(value);
    }
    ////////////////////////////////////////

    ///////// Reticulations ////////////
    function setRole48(RoleReticulations storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole48(roleId);
    }

    function storeReticulations(StoreReticulations storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeReticulations(value);
    }
    ////////////////////////////////////////

    ///////// Piscinass ////////////
    function setRole49(RolePiscinass storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole49(roleId);
    }

    function storePiscinass(StorePiscinass storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storePiscinass(value);
    }
    ////////////////////////////////////////

    ///////// Strontics ////////////
    function setRole50(RoleStrontics storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole50(roleId);
    }

    function storeStrontics(StoreStrontics storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeStrontics(value);
    }
    ////////////////////////////////////////

    ///////// Kainitess ////////////
    function setRole51(RoleKainitess storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole51(roleId);
    }

    function storeKainitess(StoreKainitess storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeKainitess(value);
    }
    ////////////////////////////////////////

    ///////// Appraisees ////////////
    function setRole53(RoleAppraisees storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole53(roleId);
    }

    function storeAppraisees(StoreAppraisees storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeAppraisees(value);
    }
    ////////////////////////////////////////

    ///////// Footlamberts ////////////
    function setRole52(RoleFootlamberts storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole52(roleId);
    }

    function storeFootlamberts(StoreFootlamberts storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeFootlamberts(value);
    }
    ////////////////////////////////////////

    ///////// Zecchinis ////////////
    function setRole54(RoleZecchinis storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole54(roleId);
    }

    function storeZecchinis(StoreZecchinis storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeZecchinis(value);
    }
    ////////////////////////////////////////

    ///////// Spooniests ////////////
    function setRole55(RoleSpooniests storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole55(roleId);
    }

    function storeSpooniests(StoreSpooniests storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeSpooniests(value);
    }
    ////////////////////////////////////////

    ///////// Repotteds ////////////
    function setRole56(RoleRepotteds storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole56(roleId);
    }

    function storeRepotteds(StoreRepotteds storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeRepotteds(value);
    }
    ////////////////////////////////////////

    ///////// Hatables ////////////
    function setRole57(RoleHatables storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole57(roleId);
    }

    function storeHatables(StoreHatables storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeHatables(value);
    }
    ////////////////////////////////////////

    ///////// Revisions ////////////
    function setRole58(RoleRevisions storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole58(roleId);
    }

    function storeRevisions(StoreRevisions storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeRevisions(value);
    }
    ////////////////////////////////////////

    ///////// Outrings ////////////
    function setRole59(RoleOutrings storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole59(roleId);
    }

    function storeOutrings(StoreOutrings storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeOutrings(value);
    }
    ////////////////////////////////////////

    ///////// Easinesss ////////////
    function setRole60(RoleEasinesss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole60(roleId);
    }

    function storeEasinesss(StoreEasinesss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeEasinesss(value);
    }
    ////////////////////////////////////////

    ///////// Quibbless ////////////
    function setRole61(RoleQuibbless storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole61(roleId);
    }

    function storeQuibbless(StoreQuibbless storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeQuibbless(value);
    }
    ////////////////////////////////////////

    ///////// Frowstss ////////////
    function setRole62(RoleFrowstss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole62(roleId);
    }

    function storeFrowstss(StoreFrowstss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeFrowstss(value);
    }
    ////////////////////////////////////////

    ///////// Musculaturess ////////////
    function setRole63(RoleMusculaturess storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole63(roleId);
    }

    function storeMusculaturess(StoreMusculaturess storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeMusculaturess(value);
    }
    ////////////////////////////////////////

    ///////// Reembracings ////////////
    function setRole64(RoleReembracings storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole64(roleId);
    }

    function storeReembracings(StoreReembracings storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeReembracings(value);
    }
    ////////////////////////////////////////

    ///////// Beguilements ////////////
    function setRole65(RoleBeguilements storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole65(roleId);
    }

    function storeBeguilements(StoreBeguilements storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeBeguilements(value);
    }
    ////////////////////////////////////////

    ///////// Commissioners ////////////
    function setRole66(RoleCommissioners storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole66(roleId);
    }

    function storeCommissioners(StoreCommissioners storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeCommissioners(value);
    }
    ////////////////////////////////////////

    ///////// Statusys ////////////
    function setRole67(RoleStatusys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole67(roleId);
    }

    function storeStatusys(StoreStatusys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeStatusys(value);
    }
    ////////////////////////////////////////

    ///////// Coronarys ////////////
    function setRole68(RoleCoronarys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole68(roleId);
    }

    function storeCoronarys(StoreCoronarys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeCoronarys(value);
    }
    ////////////////////////////////////////

    ///////// Apishs ////////////
    function setRole69(RoleApishs storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole69(roleId);
    }

    function storeApishs(StoreApishs storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeApishs(value);
    }
    ////////////////////////////////////////

    ///////// Anguines ////////////
    function setRole70(RoleAnguines storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole70(roleId);
    }

    function storeAnguines(StoreAnguines storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeAnguines(value);
    }
    ////////////////////////////////////////

    ///////// Viscachas ////////////
    function setRole71(RoleViscachas storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole71(roleId);
    }

    function storeViscachas(StoreViscachas storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeViscachas(value);
    }
    ////////////////////////////////////////

    ///////// Cyanosiss ////////////
    function setRole72(RoleCyanosiss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole72(roleId);
    }

    function storeCyanosiss(StoreCyanosiss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeCyanosiss(value);
    }
    ////////////////////////////////////////

    ///////// Moquettess ////////////
    function setRole73(RoleMoquettess storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole73(roleId);
    }

    function storeMoquettess(StoreMoquettess storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeMoquettess(value);
    }
    ////////////////////////////////////////

    ///////// Chirpings ////////////
    function setRole74(RoleChirpings storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole74(roleId);
    }

    function storeChirpings(StoreChirpings storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeChirpings(value);
    }
    ////////////////////////////////////////

    ///////// Nicotiness ////////////
    function setRole75(RoleNicotiness storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole75(roleId);
    }

    function storeNicotiness(StoreNicotiness storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeNicotiness(value);
    }
    ////////////////////////////////////////

    ///////// Friendlilys ////////////
    function setRole76(RoleFriendlilys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole76(roleId);
    }

    function storeFriendlilys(StoreFriendlilys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeFriendlilys(value);
    }
    ////////////////////////////////////////

    ///////// Polluterss ////////////
    function setRole77(RolePolluterss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole77(roleId);
    }

    function storePolluterss(StorePolluterss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storePolluterss(value);
    }
    ////////////////////////////////////////

    ///////// Doornailss ////////////
    function setRole78(RoleDoornailss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole78(roleId);
    }

    function storeDoornailss(StoreDoornailss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeDoornailss(value);
    }
    ////////////////////////////////////////

    ///////// Aimfuls ////////////
    function setRole79(RoleAimfuls storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole79(roleId);
    }

    function storeAimfuls(StoreAimfuls storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeAimfuls(value);
    }
    ////////////////////////////////////////

    ///////// Classicallys ////////////
    function setRole80(RoleClassicallys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole80(roleId);
    }

    function storeClassicallys(StoreClassicallys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeClassicallys(value);
    }
    ////////////////////////////////////////

    ///////// Gunpoints ////////////
    function setRole81(RoleGunpoints storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole81(roleId);
    }

    function storeGunpoints(StoreGunpoints storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeGunpoints(value);
    }
    ////////////////////////////////////////

    ///////// Crannys ////////////
    function setRole82(RoleCrannys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole82(roleId);
    }

    function storeCrannys(StoreCrannys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeCrannys(value);
    }
    ////////////////////////////////////////

    ///////// Filleteds ////////////
    function setRole83(RoleFilleteds storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole83(roleId);
    }

    function storeFilleteds(StoreFilleteds storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeFilleteds(value);
    }
    ////////////////////////////////////////

    ///////// Accessoriseds ////////////
    function setRole84(RoleAccessoriseds storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole84(roleId);
    }

    function storeAccessoriseds(StoreAccessoriseds storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeAccessoriseds(value);
    }
    ////////////////////////////////////////

    ///////// Prototypics ////////////
    function setRole85(RolePrototypics storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole85(roleId);
    }

    function storePrototypics(StorePrototypics storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storePrototypics(value);
    }
    ////////////////////////////////////////

    ///////// Preconciliars ////////////
    function setRole86(RolePreconciliars storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole86(roleId);
    }

    function storePreconciliars(StorePreconciliars storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storePreconciliars(value);
    }
    ////////////////////////////////////////

    ///////// Recencys ////////////
    function setRole87(RoleRecencys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole87(roleId);
    }

    function storeRecencys(StoreRecencys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeRecencys(value);
    }
    ////////////////////////////////////////

    ///////// Briniess ////////////
    function setRole88(RoleBriniess storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole88(roleId);
    }

    function storeBriniess(StoreBriniess storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeBriniess(value);
    }
    ////////////////////////////////////////

    ///////// Verduress ////////////
    function setRole89(RoleVerduress storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole89(roleId);
    }

    function storeVerduress(StoreVerduress storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeVerduress(value);
    }
    ////////////////////////////////////////

    ///////// Impassablys ////////////
    function setRole90(RoleImpassablys storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole90(roleId);
    }

    function storeImpassablys(StoreImpassablys storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeImpassablys(value);
    }
    ////////////////////////////////////////

    ///////// Democratics ////////////
    function setRole91(RoleDemocratics storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole91(roleId);
    }

    function storeDemocratics(StoreDemocratics storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeDemocratics(value);
    }
    ////////////////////////////////////////

    ///////// Fishingss ////////////
    function setRole92(RoleFishingss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole92(roleId);
    }

    function storeFishingss(StoreFishingss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeFishingss(value);
    }
    ////////////////////////////////////////

    ///////// Hyperbolicals ////////////
    function setRole93(RoleHyperbolicals storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole93(roleId);
    }

    function storeHyperbolicals(StoreHyperbolicals storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeHyperbolicals(value);
    }
    ////////////////////////////////////////

    ///////// Objurgates ////////////
    function setRole94(RoleObjurgates storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole94(roleId);
    }

    function storeObjurgates(StoreObjurgates storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeObjurgates(value);
    }
    ////////////////////////////////////////

    ///////// Membranouss ////////////
    function setRole95(RoleMembranouss storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole95(roleId);
    }

    function storeMembranouss(StoreMembranouss storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeMembranouss(value);
    }
    ////////////////////////////////////////

    ///////// Strobilaes ////////////
    function setRole96(RoleStrobilaes storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole96(roleId);
    }

    function storeStrobilaes(StoreStrobilaes storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeStrobilaes(value);
    }
    ////////////////////////////////////////

    ///////// Less ////////////
    function setRole97(RoleLess storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole97(roleId);
    }

    function storeLess(StoreLess storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeLess(value);
    }
    ////////////////////////////////////////

    ///////// Rarefiers ////////////
    function setRole98(RoleRarefiers storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole98(roleId);
    }

    function storeRarefiers(StoreRarefiers storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeRarefiers(value);
    }
    ////////////////////////////////////////

    ///////// Cylixs ////////////
    function setRole99(RoleCylixs storageAddress, uint256 roleId) public view checkOwnerAndAccept {
    storageAddress.setRole99(roleId);
    }

    function storeCylixs(StoreCylixs storageAddress, uint value) public view checkOwnerAndAccept {
        storageAddress.storeCylixs(value);
    }
    ////////////////////////////////////////
}