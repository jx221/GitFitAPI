const express = require('express');
const router = express.Router();
const pool = require('../config/dbConfig');

router.post('/generateWorkout', async (req, res) => {
    try {
      const muscles = req.body.muscles; // An array of muscle group names
      let exercises = [];
      let selectedExerciseIds = [];
  
      for (const muscle of muscles) {
        // Query to select a random exercise that hasn't been selected before
        const exercise = await pool.query(
          'SELECT * FROM exersises WHERE muscle = $1 AND name NOT IN ($2) ORDER BY RANDOM() LIMIT 1',
          [muscle, selectedExerciseIds]
        );
        
        if (exercise.rows.length > 0) {
          const selectedExercise = exercise.rows[0];
          exercises.push(selectedExercise);
          selectedExerciseIds.push(selectedExercise.name);
        }
      }
  
      res.json({exercises });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
});

  

module.exports = router;