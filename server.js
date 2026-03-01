// server.js

require('dotenv').config();
const http = require('http');
const app = require('./src/app');

const PORT = process.env.PORT || 5001;

// Create HTTP server
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});