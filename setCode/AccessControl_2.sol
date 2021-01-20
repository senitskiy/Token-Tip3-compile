pragma solidity >= 0.6.0;
pragma AbiHeader expire;

import "./Interfaces_2.sol";

abstract contract AccessControl is OpenRole, AddMember, StopMember {
  
  modifier alwaysAccept {
    tvm.accept();
    _;
  }
  
  function isOwner() public view alwaysAccept returns (bool is_owner) {
    return msg.pubkey() == tvm.pubkey();
  }
  
  modifier onlyOwner() {
    require(isOwner());
    tvm.accept();
    _;
  }
  
  address public superuser;
  
  struct RoleData {
    address[] members;
    mapping (address => uint256) indexes;
    bytes roleName;
  }
  
  RoleData[] roles;
  
  function checkAddress(address _address) public pure  alwaysAccept returns (bool) {
    return !_address.isStdZero() && !_address.isNone() && _address.isStdAddrWithoutAnyCast();
  }
  
  function setSuperuser(address new_superuser) public onlyOwner  {
    require(checkAddress(new_superuser));
    superuser = new_superuser;
  }
  
  function getSuperuser() public view alwaysAccept returns (address current_superuser) {
    current_superuser = superuser;
  }
  
  function isSuperuser() public view alwaysAccept returns (bool is_superuser) {
    return msg.sender == superuser;
  }
  
  modifier onlySuperuser() {
    require(isSuperuser());
    tvm.accept();
    _;
  }
  
  function checkRoleId(uint256 roleId) public view  alwaysAccept returns (bool) {
    return roleId < roles.length;
  }
  
  function hasAccess(uint256 roleId, address member) public view alwaysAccept returns (bool) {
    require(checkRoleId(roleId));
    require(checkAddress(member));
    RoleData r = roles[roleId];
    return r.indexes[member] != 0;
  }
  
  function addRole(bytes roleNameHex) public override onlySuperuser {
    RoleData r;
    r.roleName = roleNameHex;
    roles.push(r);
  }
  
  function addRoleMember(uint256 roleId, address member) public override onlySuperuser {
    require(checkRoleId(roleId));
    require(checkAddress(member));
    if(hasAccess(roleId, member)){
      return;
    }else { // new member
      RoleData r = roles[roleId];
      r.members.push(member);
      uint256 memberIndex = r.members.length;
      r.indexes[member] = memberIndex;
      roles[roleId] = r;
    }
  }
  
  function closeAccess(uint256 roleId, address member) public override onlySuperuser {
    require(checkRoleId(roleId));
    require(checkAddress(member));
    if(hasAccess(roleId, member)){
      RoleData r = roles[roleId];
      r.indexes[member] = 0;
      roles[roleId] = r;
    }else {
      return;
    }
  }
  
  function getRolesLength() public view alwaysAccept returns (uint256 roles_length) {
    roles_length = roles.length;
  }
  
  function getRoleName(uint256 roleId) public view alwaysAccept returns (bytes role_name) {
    RoleData r = roles[roleId];
    role_name = r.roleName;
  }
  
  function getRoleMembersById(uint256 roleId) public view alwaysAccept returns (address[] role_members) {
    require(checkRoleId(roleId));
    RoleData r = roles[roleId];
    role_members = r.members;
  }
  
  modifier onlyMemberOf(uint256 roleId) {
    require(hasAccess(roleId, msg.sender), 403);
    tvm.accept();
    _;
  }
  
}
