// Get blocklist
let blocklist;
chrome.runtime.sendMessage({"method": "getlist"}, function(response) {
    blocklist = response;
});

// Get current tab URL
// Apparently Chrome API is stupid and I have to use background.js. Fine.
let currentURL = location.href;

console.log(currentURL)