// blocklist ig
const weblink = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list.txt";
const weblink_re = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list_re.txt";
var state = true;

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
		// listener to set state
		if ((message.method == "getstate")) {
			// return current state
			sendResponse(state);
		}
		// set state to true/on
		if ((message.method == "setstate_t")) {
			// return current state
			state = true;
			sendResponse(state);
		}
		// set state to false/off
		if ((message.method == "setstate_f")) {
			// return current state
			state = false;
			sendResponse(state);
		}
	});
}