// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('vote').addEventListener('click', goToVotePage, false);
});

function getDomainName(tabURL){
    var tabURL = new URL(tabURL);
    return tabURL.hostname;
}

function getUserRole(){
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['userRole'], (result) => {
            resolve(result.userRole);
        });
    });
}

function getWalletAddress() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['walletAddress'], (result) => {
            console.log(result.walletAddress);
            resolve(result.walletAddress);
        });
    });
}

async function loadApp() {
    // Wallet Address
    let walletAddress = await getWalletAddress();
    $("#walletAddress").text(walletAddress);
}

async function loadVotingOptions(){
    var userRole = await getUserRole();

    if('active' == userRole){
        $('#votingForm').css('display', '');
    } else {
        $('#enrollForVote').css('display', '');
    }
}

// App Start
chrome.tabs.query({
    currentWindow: true,
    active: true
}, function (tabs) {
    // Load App
    loadApp();

    // Get Domain
    currentDomain = getDomainName(tabs[0].url);
    
    // Remove Loader
    $('.loader').animate({
        opacity: 0
    }, 500, function () {
        if ('newtab' == currentDomain) {
            $("#domain").val('Open Website First');
            return;
        } else {
            $("#domain").val(currentDomain);
            // processDomainStatus();
            loadVotingOptions();
        }
    });
});

$('#votingForm').on('click', function(){
    window.location.href = 'vote.html';
});