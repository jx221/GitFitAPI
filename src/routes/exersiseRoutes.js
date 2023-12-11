const express = require('express');
const router = express.Router();
const pool = require('../config/dbConfig');

// Endpoint to get all exercises
router.get('/', async (req, res) => {
  try {
    const allExercises = await pool.query('SELECT * FROM exersises');
    res.json(allExercises.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
