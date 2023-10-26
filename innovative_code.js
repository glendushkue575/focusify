// innovative_code.js

// This code implements a web-based chat application with user authentication and real-time messaging.
// It utilizes Node.js with the Express framework for the server-side and Socket.IO for real-time communication.

// Importing required modules
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");

// Initialize the Express app and create a server
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Define static file directory
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

// Data structure to store users
const users = {};

// Event handling for initial connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Event handling for login
  socket.on("login", (username) => {
    users[socket.id] = username;
    io.emit("userStatusChange", `${username} has joined the chat.`);
  });

  // Event handling for incoming messages
  socket.on("message", (message) => {
    const user = users[socket.id];
    io.emit("message", { user, message });
  });

  // Event handling for user disconnection
  socket.on("disconnect", () => {
    const username = users[socket.id];
    delete users[socket.id];
    io.emit("userStatusChange", `${username} has left the chat.`);
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
