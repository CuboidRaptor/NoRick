// blocklist ig
const weblink = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list.txt";
const weblink_re = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list_re.txt";

// um get it
var temp = [];
function web_get(urls) {
	for (let i = 0; i < urls.length; i++) {
		fetch(urls[i])
		.then(function(response) {
			response.text().then(function(text) {
				temp.push(text.split("\n"));
			})
		})
	}
	done(temp);
}

web_get([weblink, weblink_re]);

function done(lists) {
	// yay got it
	chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
		if (message.method == "getlist") {
			// now add listener to return blocklist to content.js
			sendResponse(lists);
		}
	});
}