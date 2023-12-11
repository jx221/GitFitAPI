require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const exersiseRoutes = require('./src/routes/exersiseRoutes');
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
  });
// Middlewares
app.use(cors());
app.use(express.json()); // Replace bodyParser.json()

// Pool for PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Define routes...

app.use('/api/exersises', exersiseRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
