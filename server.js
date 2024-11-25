const net = require('net');

// List of connected clients
const clients = [];

// Create a TCP server
const server = net.createServer((socket) => {
    // Add the new client to the list
    clients.push(socket);
    console.log('New client connected.');

    // Notify the client
    socket.write('Welcome to the chatroom!\n');

    // Handle incoming messages
    socket.on('data', (data) => {
        const message = data.toString().trim();

        // Broadcast to other clients
        clients.forEach((client) => {
            if (client !== socket) {
                client.write(`Client ${socket.remoteAddress}: ${message}\n`);
            }
        });
    });

    // Handle client disconnection
    socket.on('end', () => {
        console.log('Client disconnected.');
        clients.splice(clients.indexOf(socket), 1); // Remove client from list
    });

    // Handle socket errors
    socket.on('error', (err) => {
        console.error(`Socket error: ${err.message}`);
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Chat server running on port ${PORT}`);
});
