const net = require('net');
const readline = require('readline');

// Set up a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'You: ',
});

// Connect to the server
const client = net.createConnection({ port: 3000, host: '127.0.0.1' }, () => {
    console.log('Connected to the chat server.');
    rl.prompt();
});

// Display messages from the server
client.on('data', (data) => {
    console.log(`\n${data.toString().trim()}`);
    rl.prompt();
});

// Send user input to the server
rl.on('line', (line) => {
    client.write(line);
    rl.prompt();
});

// Handle disconnection
client.on('end', () => {
    console.log('Disconnected from the server.');
    rl.close();
});

// Handle connection errors
client.on('error', (err) => {
    console.error(`Connection error: ${err.message}`);
    rl.close();
});
