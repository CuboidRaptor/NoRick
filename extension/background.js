// blocklist ig
let weblink = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list.txt";

// um get it
let blocklist;
fetch(weblink)
	.then(response => response.text())
	.then((data) => {
		blocklist = data.split("\n");
	})

// yay got it
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.method == 'getlist') {
		// now add listener to return blocklist to content.js
		sendResponse(blocklist);
	}
});