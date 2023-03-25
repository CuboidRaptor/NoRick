// blocklist ig
const weblink = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list.txt";
const weblink_re = "https://raw.githubusercontent.com/CuboidRaptor/NoRick/list/list_re.txt";
var state = true;

// um get it
var lists = [];
function web_get(urls, run=true) {
	for (let i = 0; i < urls.length; i++) {
		fetch(urls[i])
		.then(function(response) {
			response.text().then(function(text) {
				lists.push(text.split("\n"));
			})
		})
	}
	
	if (run) {
		done();
	}
}

web_get([weblink, weblink_re]);

function done() {
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
		// oopdaet leest
		if ((message.method == "update")) {
			// redownload and reload list
			web_get([weblink, weblink_re], run=false);
			sendResponse(0);
		}
	});
}