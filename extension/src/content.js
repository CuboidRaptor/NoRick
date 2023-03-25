// Check state
chrome.runtime.sendMessage({"method": "getstate"}, function(response) {
	if (response) {
		getList();
	}
});

function getList() {
	// Get blocklist
	chrome.runtime.sendMessage({"method": "getlist"}, function(response) {
		process(response);
	});
}

function block_rickroll() {
	// Kill site to prevent rickroll
	window.stop();
	document.body.innerHTML = "";
	console.log("debug: that's a rickroll");
	alert("ok so um that's a rickroll");
}

function rsstrip(x) {
	if (x.slice(-1) == "/") {
		return x.slice(0, -1);
	}
	else
	{
		return x
	}
}

function process(blocklists) {
	// Get current tab URL
	var currentURL = rsstrip(location.href);
	
	var blocklist = blocklists[0]
	var blocklist_re = blocklists[1]
	
	//debug shtuff
	console.log("debug: NoRick has been ran with URL " + currentURL);
	
	for (let i = 0; i < blocklist.length; i++) {
		// Iterate over every non-re rickroll
		if (blocklist[i] == currentURL) {
			// Is a rickroll, kill the site
			block_rickroll();
			break;
		}
	}
	
	for (let i = 0; i < blocklist_re.length; i++) {
		current_RE = new RegExp(blocklist_re[i]);
		if (current_RE.test(currentURL)) {
			// Is a rickroll, kill the site
			block_rickroll();
			break;
		}
	}
}
