// Get blocklist
chrome.runtime.sendMessage({"method": "getlist"}, function(response) {
	process(response);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function process(blocklist) {
	// Get current tab URL
	var currentURL = location.href;
	
	console.log("debug, NoRick has been ran")
	console.log("debug, supposed current URL is " + currentURL)
	
	//Processing, c'mon youtube couldn't you have used reasonable code
	if (currentURL.endsWith("&feature=youtu.be")) {
		currentURL = currentURL.slice(0, -("&feature=youtu.be".length));
		console.log("debug, youtu.be detected, end processed URL is " + currentURL)
	}
	
	for (let i = 0; i < blocklist.length; i++) {
		// Iterate over every rickroll
		if (blocklist[i] == currentURL) {
			// Is a rickroll, kill the site
			window.stop();
			console.log("rickroll");
			alert("ok so um that's a rickroll");
			break;
		}
	}
}
