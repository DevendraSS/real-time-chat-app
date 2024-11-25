Real-Time Chat Application
A lightweight, scalable real-time chat application built with Node.js, leveraging native TCP sockets for efficient communication. This application demonstrates core networking principles while maintaining simplicity and performance.
🌟 Features
Server Capabilities

Multi-client support with concurrent connection handling
Efficient message broadcasting system
Real-time message delivery
Graceful connection handling and error recovery
Client connection status monitoring

Client Features

Interactive command-line interface
Real-time message sending and receiving
User presence notifications
Connection status indicators
Automatic reconnection attempts
Message history preservation

📋 Prerequisites

Node.js (v14.0.0 or higher)
Terminal with UTF-8 support
Available port 3000 (configurable)

🚀 Getting Started
Server Setup

Clone the repository:
bashCopygit clone https://github.com/yourusername/realtime-chat
cd realtime-chat

Start the server:
bashCopynode server.js


The server will initialize and display a startup message with the active port number.
Client Connection

Open a new terminal window
Launch the client:
bashCopynode client.js

When prompted, enter your username
Start chatting!

Multiple clients can connect simultaneously by repeating these steps in different terminals.
🏗 Architecture
Server Architecture
CopyServer
├── Connection Manager
│   ├── Client tracking
│   └── Connection pooling
├── Message Broker
│   ├── Message validation
│   └── Broadcasting system
└── Error Handler
    ├── Connection recovery
    └── Error logging
Client Architecture
CopyClient
├── Network Layer
│   ├── Socket management
│   └── Reconnection logic
├── UI Manager
│   ├── Input handling
│   └── Display formatting
└── Message Handler
    ├── Message parsing
    └── History management
💻 Technical Implementation
Networking

TCP sockets for reliable, ordered message delivery
Asynchronous I/O operations
Binary protocol for efficient data transfer
Heartbeat mechanism for connection monitoring

Data Flow

Client connects to server (TCP handshake)
Server authenticates client and adds to connection pool
Client sends message
Server validates and broadcasts message
Connected clients receive and display message

⚙️ Configuration
Server configuration can be modified in config.js:
javascriptCopymodule.exports = {
  PORT: process.env.PORT || 3000,
  MAX_CLIENTS: 100,
  TIMEOUT: 5000,
  RECONNECT_ATTEMPTS: 3
};
🛡️ Error Handling
The application implements comprehensive error handling:

Connection failures
Network timeouts
Invalid message formats
Server disconnections
Resource exhaustion

🔍 Limitations

Text-only message support
No message persistence
Basic authentication
Single server instance
No end-to-end encryption

🛠️ Future Improvements

Message persistence using SQLite
File sharing capabilities
End-to-end encryption
User authentication
Multiple chat rooms
Web-based interface
Message delivery confirmation
Typing indicators

📝 Contributing

Fork the repository
Create a feature branch
Commit your changes
Push to the branch
Open a Pull Request