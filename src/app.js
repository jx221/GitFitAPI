const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const exerciseRoutes = require('./routes/exerciseRoutes');
// ... other imports and middleware

app.use('/api/exercises', exerciseRoutes);


// Import the pool from your dbConfig file
const pool = require('./config/dbConfig');

// Import your route handlers
const exerciseRoutes = require('./routes/exerciseRoutes');

// Initialize the express application
const app = express();

// Apply middleware
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Enable HTTP request logging
app.use(morgan('dev'));

// Parse incoming JSON requests and add the parsed data to req.body
app.use(express.json());

const exerciseRoutes = require('./routes/exerciseRoutes');

// Routes
// This will prefix '/api/exercises' to all routes defined in your exerciseRoutes file
app.use('/api/exercises', exerciseRoutes);

// Basic route for the root of your API
app.get('/', (req, res) => {
  res.send('Welcome to the GitFit API');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Export the app for use in your server.js file
module.exports = app;
