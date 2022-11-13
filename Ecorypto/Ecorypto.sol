pragma solidity ^0.5.0;

import "./TRC20.sol";
import "./TRC20Detailed.sol";
import "./EnumerableSet.sol";

contract SpenderRole {
    using EnumerableSet for EnumerableSet.AddressSet;
    
    event SpenderAdded(address indexed account);
    event SpenderRemoved(address indexed account);
    
    EnumerableSet.AddressSet private _spenders;
    
    constructor() public {
        _addSpender(msg.sender);
    }
    
    modifier onlySpender() {
        require(isSpender(msg.sender));
        _;
    }
    
    function isSpender(address account) public view returns (bool) {
        return _spenders.contains(account);
    }
    
    function addSpender(address account) public onlySpender {
        _addSpender(account);
    }
    
    function renounceSpender() public {
        _removeSpender(msg.sender);
    }
    
    function _addSpender(address account) internal {
        _spenders.add(account);
        emit SpenderAdded(account);
    }
    
    function _removeSpender(address account) internal {
        _spenders.remove(account);
        emit SpenderRemoved(account);
    }
}

/**
 * @dev TRC20 spender logic
 */
contract TRC20Spendable is TRC20, SpenderRole {
  /**
  * @dev Function to mint tokens
  * @param from The address that will spend the tokens
  * @param value The amount of tokens to spend
  * @return A boolean that indicates if the operation was successful
  */
    function spend(
        address from,
        uint256 value
    )
        public
        onlySpender
        returns (bool)
    {
        _burn(from, value);
        return true;
    }
}

contract Ecorypto is TRC20, TRC20Detailed, TRC20Spendable {

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor () public TRC20Detailed("ecorypto", "ECO", 6) {
        _mint(msg.sender, 1000000000 * (10 ** uint256(decimals())));
    }
}
