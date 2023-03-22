// blocklist ig
const weblink = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list.txt";
const weblink_re = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list_re.txt";

// um get it
function web_get() {
	var temp;
	fetch(weblink)
		.then(response => response.text())
		.then((data) => {
			temp = data.split("\n");
		})
		
	return temp;
}

blocklist = web_get(weblink);
blocklist_re = web_get(weblink_re);

// yay got it
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.method == "getlist") {
		// now add listener to return blocklist to content.js
		sendResponse([blocklist, blocklist_re]);
	}
});