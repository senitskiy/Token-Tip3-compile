pragma solidity >=0.6.0;
pragma AbiHeader time;
pragma AbiHeader expire;

contract Setcodecontract {
    modifier onlyOwner {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        _;
    }

    function Setcodemain(TvmCell newcode) public pure returns (uint) {
        tvm.accept();
        tvm.setcode(newcode);
        return 0;
    }
    
}