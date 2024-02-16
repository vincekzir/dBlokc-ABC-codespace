// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Crazybluu is ERC721URIStorage  {
    uint256 private _nextTokenId;

    constructor()
        ERC721("crazybluu", "BLU")
    {}

    function safemint() external {
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(
            tokenId,
            "ipfs://bafkreidhwjnee6z2mdxwsb27kwi34pcridt6qpgvi4ni6q7fmrx3fd44wa"
        );
    }
}