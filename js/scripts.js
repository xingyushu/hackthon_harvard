/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

function setCookie(username, value, expiry) {
    const date = new Date();
    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
    var expires = "expires="+date.toUTCString();
    document.cookie = username + "=" + value + ";" + expires + ";path=/";
}

function getCookie(username) {
    let name = username + "=";
    let spli = document.cookie.split(';');
    for(var j = 0; j < spli.length; j++) {
      let char = spli[j];
      while (char.charAt(0) == ' ') {
        char = char.substring(1);
      }
      if (char.indexOf(name) == 0) {
        return char.substring(name.length, char.length);
      }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    // checking whether user is null or not
    if (user != "") {
        //if user is not null then alert
        console.log("Welcome again " + user);
    }
    //if user is null
    else {
        //take input from user
        // user = prompt("Please enter your name:", "");
        user = "username";
        //set cookie
        if (user != "" && user != null) {
        setCookie("username", user, 365);
        setCookie("challenges", "001010", 365)
        }
    }
}


function completeChallenge(num) {
    console.log("COMPLETED CHALLENGE: " + num);
    challengeString = getCookie("challenges");
    newString = challengeString.substring(0, num-1) + "1" + challengeString.substring(num);
    setCookie("challenges", newString, 365);
    claimReward();
    updateChallenge(num, 0);
}

function isChallengeCompleted(num) {
    challengeString = getCookie("challenges");
    // newString = challengeString.substring(0, num-1) + "1" + challengeString.substring(num);
    return (challengeString.charAt(num-1)=='1');
}

function updateChallenge(num, cost) {
    completed = isChallengeCompleted(num);
    element = document.getElementById("portfolioModalButton"+num);
    if (completed) {
        element.classList.add("btn-secondary");
        element.classList.add("disabled");
        element.textContent = "Already Claimed.";
    } else {
        element.classList.add("btn-primary");
        element.textContent = "Claim " + cost + " eco-coins!";
    }
}

// balance update
document.addEventListener("DOMContentLoaded", async function() {
    const server = "https://api.shasta.trongrid.io";
    const address = "TYMeHyQBDot2DNC5Zq1DoFUnfyc3ojRiPC";
    const tronWeb = new TronWeb({fullHost:server, solidityNode:server, eventServer:server, privateKey: ""});
    const abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SpenderAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SpenderRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addSpender","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isSpender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceSpender","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"spend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    const contract = tronWeb.contract(abi, address);
    tronWeb.setAddress(address);
    contract.balanceOf("TMChbmRJnxyCAiuWZyY7cAQcmjnP3okAQF").call().then(function(result) {
        console.log(parseInt(result)); // TODO update balance
    });
});


function updateBalance() {
    const server = "https://api.shasta.trongrid.io";
    const address = "TYMeHyQBDot2DNC5Zq1DoFUnfyc3ojRiPC";
    const tronWeb = new TronWeb({fullHost:server, solidityNode:server, eventServer:server, privateKey: ""});
    const abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SpenderAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SpenderRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addSpender","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isSpender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceSpender","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"spend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    const contract = tronWeb.contract(abi, address);
    tronWeb.setAddress(address);
    contract.balanceOf("TMChbmRJnxyCAiuWZyY7cAQcmjnP3okAQF").call().then(function(result) {
        element = document.getElementById("balance");
        element.textContent = result + " coins";
        console.log(parseInt(result)); // TODO update balance
    });
}

// claim reward
function claimReward() {
    const server = "https://api.shasta.trongrid.io";
    const address = "TMJXdwC1Um5QH8fGXtMpfgvYCsX95RZsj3";
    const tronWeb = new TronWeb({fullHost:server, solidityNode:server, eventServer:server, privateKey: ""});
    const abi = [{"entrys":[{"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"claimReward","type":"Event"},{"outputs":[{"name":"value","type":"uint256"}],"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"owner","stateMutability":"View","type":"Function"},{"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"sendRewardCar","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"sendRewardPublicTrans","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"sendRewardRecycle","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"sendRewardWalk","stateMutability":"Nonpayable","type":"Function"}]}];
    const contract = tronWeb.contract(abi, address);
    tronWeb.setAddress(address);
    contract.sendRewardCar("TMChbmRJnxyCAiuWZyY7cAQcmjnP3okAQF", "TYMeHyQBDot2DNC5Zq1DoFUnfyc3ojRiPC").call().then(function(result) {
        console.log(parseInt(result));
    });
}

uris = ["https://gateway.pinata.cloud/ipfs/QmWiTnDTS7KQAKWT8Kna6yTZ1CmeMqMe3mqis2k7764jwU",
"https://gateway.pinata.cloud/ipfs/QmR5xj4mGS5ZGk1QGdnZqWuVSYAGY1fRoNNeCckpY9dCff",
"https://gateway.pinata.cloud/ipfs/QmceSMXYRP84Yo4ebBC9X7MtphYFNdE1569RddKmjxiAgG",
"https://gateway.pinata.cloud/ipfs/QmT6DNxY4UhTqVA6BsNp7B61i6ARwiyPQUVJJWBgBqU8hj",
"https://gateway.pinata.cloud/ipfs/QmPmuz1vz56nwNW9AHQkWYemVvkzCLaHYi1yYdhUv7BTgZ"];

// claim NFT (NOT BUY OR SELL)
function claimNFT() {
    const server = "https://api.shasta.trongrid.io";
    const address = "TA5RtpBmV8r1Z6QKdqkG22zUazm16Pa86U";
    const tronWeb = new TronWeb({fullHost:server, solidityNode:server, eventServer:server, privateKey: ""});
    const abi = {"entrys":[{"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"Event"},{"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"Event"},{"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"Event"},{"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"Event"},{"outputs":[{"type":"string"}],"constant":true,"name":"CANNOT_TRANSFER_TO_ZERO_ADDRESS","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"NOT_CURRENT_OWNER","stateMutability":"View","type":"Function"},{"inputs":[{"name":"account","type":"address"}],"name":"addMinter","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"baseURI","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","stateMutability":"View","type":"Function"},{"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"mint","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"tokenURI","type":"string"}],"name":"mintWithTokenURI","stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"address"}],"constant":true,"name":"mintingCurrency","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"mintingPrice","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"owner","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","stateMutability":"View","type":"Function"},{"name":"renounceMinter","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeMint","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeMint","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"newMintingCurrency","type":"address"}],"name":"setMintingCurrency","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"newMintingPrice","type":"uint256"}],"name":"setMintingPrice","stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"bool"}],"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalSupply","stateMutability":"View","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"nonpayable","type":"function"}]};
    const contract = tronWeb.contract(abi, address);
    tronWeb.setAddress(address);
    web3.
    contract.mintWithTokenURI("TMChbmRJnxyCAiuWZyY7cAQcmjnP3okAQF", Math.floor(random()*100000), uris[0]).call();
}

claimNFT();
console.log("here");
