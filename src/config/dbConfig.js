
const { Pool } = require('pg');
require('dotenv').config();

// Create a pool using the connection string or individual parameters
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'GitFit',
  password: process.env.DB_PASSWORD || '7630',
  port: process.env.DB_PORT || 5432,
  // Uncomment the following line if you're using self-signed certificates (not recommended for production)
  // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
