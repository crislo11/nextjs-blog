const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3001 });

wss.on("connection", (ws) => {
  console.log("New Client connected");

  ws.on("message", (message) => {
    console.log("Message received:", message.toString());

    const messageString = message.toString();
    const messageData = JSON.parse(messageString);

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(messageData));
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:3001");