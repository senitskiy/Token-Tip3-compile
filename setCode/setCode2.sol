    function getNewVersion() public pure returns (uint) {
        tvm.accept();
        return 2;
    }

    function sendAllMoney(address dest_addr) public onlyOwner {
        selfdestruct(dest_addr);
    }