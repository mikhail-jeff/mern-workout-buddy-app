const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', true);
		const connect = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Connected to MongoDB`.brightCyan.underline);
	} catch (error) {
		console.log(`${error}`.brightRed.underline);
	}
};

module.exports = connectDB;
