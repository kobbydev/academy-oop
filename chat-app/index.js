let sendBtn = document.getElementById("send-btn");
let chatScreenBody = document.getElementById("chat-screen-body");
let chatScreenFooter = document.getElementById("chat-screen-footer");
let messageBox = document.getElementById("message-box");
let lastMessage = document.getElementById("last-message-sent");
let lMessage = document.getElementById("message");
let lmessage = document.getElementsByClassName("message");
function addMessage() {
	let messageContainer = document.createElement("div");
	let message = document.createElement("p");
	let time = document.createElement("p");
	let d = new Date();
	messageContainer.setAttribute("id", "message-container");
	messageContainer.setAttribute("class", "message-container");
	message.setAttribute("id", "message");
	time.setAttribute("id", "time");
	message.setAttribute("class", "message");
	if (messageBox.value.trim() === "") {
		return false;
	}
	message.innerHTML = messageBox.value;
	time.innerHTML = `${d.getHours()}:${d.getMinutes()}`;
	messageContainer.appendChild(message);
	messageContainer.appendChild(time);
	chatScreenBody.appendChild(messageContainer);
}

function simulator() {
	if (messageBox.value.toLowerCase().includes("hello")) {
		let simulatedMessageContainer = document.createElement("div");
		let simulatedMessage = document.createElement("p");
		let stime = document.createElement("p");
		let nd = new Date();
		stime.setAttribute("id", "stime");
		simulatedMessageContainer.setAttribute("id", "simulated-message-container");
		simulatedMessageContainer.setAttribute(
			"class",
			"simulated-message-container"
		);
		simulatedMessage.setAttribute("id", "simulated-message");
		simulatedMessage.setAttribute("class", "message");
		simulatedMessage.innerHTML = "Hello, what's up?";
		stime.innerHTML = `${nd.getHours()}:${nd.getMinutes()}`;
		simulatedMessageContainer.appendChild(simulatedMessage);
		simulatedMessageContainer.appendChild(stime);
		chatScreenBody.appendChild(simulatedMessageContainer);
		simulatedMessageContainer.style.display = "block";
	}
}

sendBtn.addEventListener("click", function () {
	addMessage();
	simulator();
	messageBox.value = "";
	lastMessage.innerHTML = lmessage[lmessage.length - 1].textContent;
});
