const express = require('express');

const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

const router = express.Router();

// * GET all workouts
router.get('/', getWorkouts);

// * POST a new workout
router.post('/', createWorkout);

// * GET a single workout
router.get('/:id', getWorkout);

// * DELETE a workout
router.delete('/:id', deleteWorkout);

// * UPDATE a workout
router.put('/:id', updateWorkout);

module.exports = router;
