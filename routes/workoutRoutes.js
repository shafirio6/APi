import express from 'express';
import { createWorkout, getAllWorkouts, getWorkout } from '../controllers/workoutController.js';
const router = express.Router();
router.get('/', getAllWorkouts);
router.get('/:id', getWorkout);
router.post('/', createWorkout);
export default router;

router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
    });
// import express from 'express';

// const router = express.Router()

// //alle workouts
// router.get('/', (req, res) => {
//     res.json({msg: "welkom op de app"})
// })

// //enkel workouts
// router.get('/:id', (req, res) => {
//     res.json({msg: "welkom op de app"})
// })

// router.delete('/api/workout', (req, res) => {
//     res.json({msg: "ik verwijder de workout"})
// })

// router.patch('/api/workout', (req, res) => {
//     res.json({msg: "patch op de app"})
// })

// export default router;