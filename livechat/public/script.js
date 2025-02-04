const socket = io();

document.getElementById("send-btn").addEventListener("click", () => {
    const message = document.getElementById("message-input").value;
    if (message.trim() !== "") {
        socket.emit("chatMessage", message);
        document.getElementById("message-input").value = "";
    }
});

socket.on("chatMessage", (msg) => {
    const chatBox = document.getElementById("chat-box");
    const msgElement = document.createElement("p");
    msgElement.textContent = msg;
    chatBox.appendChild(msgElement);
});
