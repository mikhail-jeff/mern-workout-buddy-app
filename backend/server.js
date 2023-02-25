const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const workoutRoutes = require('./routes/workouts');
const connectDB = require('./config/database');

// * middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * routes
app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`.brightCyan.underline);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
