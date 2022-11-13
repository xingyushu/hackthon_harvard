// SPDX-License-Identifier: GPL-3.0


pragma solidity >=0.7.0 <0.9.0;

interface ITRC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `recipient`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `sender` to `recipient` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract EcoryptoUsers {
    
//     struct User{
//         uint  id;
//         string name;
//         string ecotype;  // walk,car,
//         uint price;
//         // address ad;
//         bool set; // This boolean is used to differentiate between unset and zero struct values
//   }
//   mapping(address => User) public users;

// // define the balance of a user 
// mapping(uint64 => uint64) idToPoint;

// //define an user balance model
// mapping (address => uint256) public balances;


// function createUser(address ad, uint id, string name) public {
//     User storage user = users[_userAddress];
//     // Check that the user did not already exist:
//     require(!user.set);
//     //Store the user
//     users[_userAddress] = User({
//         id: _userId,
//         name: _userName,
//         set: true
//     });
// }
// function CalWalk{
//     //calculate method
//     n=n/1000
// }
// function CalResoure{
//     //calculate method
// }
// function GetData{
//     //return result
// }
// function count(n) public{
//     count=n/1000 * trx;
// }

//address public owner = address(0x15D817C681AE1504DE62cd17C7ACF0f9A62d12CA);
address public owner;
event claimReward(address to,uint256 amount);
    
constructor() {
    owner = address(msg.sender);
}

    
function sendRewardWalk(address user,address token) public {
    require(tx.origin == owner, "only owner");
    uint256 amount = 10**19; // 10 token
    ITRC20(token).transfer(user,amount);
    emit claimReward(user, amount);
}
    
function sendRewardCar(address user,address token) public {
    require(tx.origin == owner, "only owner");
    uint256 amount = 2*10**19; // 20 token
    ITRC20(token).transfer(user,amount);
    //user.claimedReward+=amount;
    emit claimReward(user, amount);
}
 
function sendRewardPublicTrans(address user,address token) public {
    require(tx.origin == owner, "only owner");
    uint256 amount = 2*10**19; // 20 token
    ITRC20(token).transfer(user,amount);
    //user.claimedReward+=amount;
    emit claimReward(user, amount);
}


function sendRewardRecycle(address user,address token) public {
    require(tx.origin == owner, "only owner");
    uint256 amount = 2*10**19; // 20 token
    ITRC20(token).transfer(user,amount);
    //user.claimedReward+=amount;
    emit claimReward(user, amount);
}

//check the balance
function getBalance(address token,address user) public view  returns (uint value){
    return ITRC20(token).balanceOf(user);
}



}