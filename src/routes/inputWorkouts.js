const express = require('express');
const router = express.Router();
const pool = require('../config/dbConfig');

router.post('/addExercise', async (req, res) => {
    try {
        const { name, muscle, link } = req.body;
        console.log(req.body);
        const newExercise = await pool.query(
            'INSERT INTO exersises (name, muscle, link) VALUES ($1, $2, $3) RETURNING *',
            [name, muscle, link]
        );
        res.json(newExercise.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;