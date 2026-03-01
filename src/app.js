// src/app.js

const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // JSON body parser

// Test Route
app.get('/', (req, res) => {
  res.status(200).json({
    message: "CRM Backend API is running 🚀"
  });
});

// Routes Mount (example structure)
// app.use('/api/auth', require('./modules/auth/auth.routes'));
// app.use('/api/users', require('./modules/users/user.routes'));
// app.use('/api/leads', require('./modules/leads/lead.routes'));

// Global Error Handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(501).json({ message: "Internal Server Error" });
});

module.exports = app;