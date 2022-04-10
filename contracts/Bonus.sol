// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Bonus is Ownable {
  address public bonusOwner;

  // Emitted when the stored value changes
  event BonusOwnerChanged(address newBonusOwner);

  // Stores a new value in the contract
  function storeBonusOwner(address newBonusOwner) public onlyOwner {
    bonusOwner = newBonusOwner;
    emit BonusOwnerChanged(newBonusOwner);
  }

}
