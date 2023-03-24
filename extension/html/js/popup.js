function showstate(state) {
	// show text with the current state
	var node = document.getElementById("txt");
	node.innerHTML = "";
	var newNode = document.createElement("p");

	if (state) {
		newNode.appendChild(document.createTextNode("NoRick is supposedly alive."));
	}
	else {
		newNode.appendChild(document.createTextNode("NoRick is dead...?"));
	}
	
	node.appendChild(newNode);
}

chrome.runtime.sendMessage({"method": "getstate"}, function(response) {
	// get the state and display it
	showstate(response);
});

function start() {
	// start norick
	chrome.runtime.sendMessage({"method": "setstate_t"}, function(response) {
		showstate(response);
	});
}

function stop() {
	// stop norick
	chrome.runtime.sendMessage({"method": "setstate_f"}, function(response) {
		showstate(response);
	});
}

function closew() {
	// close popup
	window.close();
}

// listener for button
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("update").addEventListener("click", update);
document.getElementById("close").addEventListener("click", closew);