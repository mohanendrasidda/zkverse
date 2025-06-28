pragma solidity ^0.8.28;

contract MyContract{
    uint256 private storedNumber;
 function set(uint256 _number) public {
    storedNumber = _number;
 }

 function get() public view returns (uint256){
    return storedNumber;
 }
}