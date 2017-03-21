function receiveMessages() {
	chrome.runtime.onMessage.addListener(
		function (request, sender, sendResponse) {
		if (request.from == "content") {
            console.log(request.title);
			//var productMetadata = parseSite(sender.tab.url, request.title, request.domHtml);
			//GetNumberOfOffers(sender.tab.url, sender.tab.id, sendMessageToContent, productMetadata);
		}
	});
}

receiveMessages();

