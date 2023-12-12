const express = require('express');
const router = express.Router();
const pool = require('../config/dbConfig');


router.post('/deleteExercise', (req, res) => {
    const { name } = req.body;
  
    pool.query('DELETE FROM exersises WHERE name = $1', [name], (error, results) => {
      if (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json({ message: `Exercise named ${name} deleted` });
      }
    });
  });

module.exports = router;