pragma solidity >=0.6.0;

contract Giver {
    constructor() public {}

    function sendGrams(address dest, uint64 amount) public {
        require(address(this).balance > amount, 60);
        dest.transfer(amount);
    }
}