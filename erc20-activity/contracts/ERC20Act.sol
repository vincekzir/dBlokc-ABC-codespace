// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ER20Act is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("ER20Act", "ACT")
        Ownable(initialOwner)
    {}

    function mint(address to, uint256 amountWEI) public onlyOwner {
        uint256 amountETH = amountWEI * 1e18;
        _mint(to, amountETH);
    }
}