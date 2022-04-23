// Get blocklist
chrome.runtime.sendMessage({"method": "getlist"}, function(response) {
	process(response);
});

function process(blocklist) {
	// Get current tab URL
	var currentURL = location.href;

	for (let i = 0; i < blocklist.length; i++) {
		console.log(blocklist[i]);
	}
}
