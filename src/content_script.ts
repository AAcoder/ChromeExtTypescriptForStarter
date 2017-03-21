
// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     if (msg.color) {
//         console.log('Receive color = ' + msg.color);
//         document.body.style.backgroundColor = msg.color;
//         sendResponse('Change color to ' + msg.color);
//     } else {
//         sendResponse('Color message is none.');
//     }
// });

function sendMessageToBackground(){
	var title = document.title;
	chrome.runtime.sendMessage({"domHtml": document.documentElement.outerHTML, "from":"content", "title":title});
}

sendMessageToBackground();
