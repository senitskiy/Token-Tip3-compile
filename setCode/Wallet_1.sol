pragma solidity >= 0.6.0;
pragma AbiHeader expire;

import "./AccessControl_1.sol";

abstract contract Wallet is AccessControl {

  /*
  * Public functions
  */

  function sendTransaction(address dest, uint128 value, bool bounce) public view onlyOwner {
    dest.transfer(value, bounce, 3);
  }

  // Function to receive plain transfers.
  receive() external {
  }

}
