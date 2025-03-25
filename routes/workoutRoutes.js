import express from 'express';
import { createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout } from '../controllers/workoutController.js';

const router = express.Router();

router.get('/', getAllWorkouts);
router.get('/:id', getWorkout);
router.post('/', createWorkout);
router.delete('/:id', deleteWorkout);
router.patch('/:id', updateWorkout);

export default router;



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