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
