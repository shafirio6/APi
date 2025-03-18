import express from 'express';
import workoutRoutes from './routes/workoutRoutes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();

const app = express();
app.use(express.json())

app.use('/api/workout', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("de server draait op port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })





