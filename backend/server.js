const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// * middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// * routes
app.get('/', (req, res) => {
	res.send({
		message: 'Hello from the server.',
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`.brightCyan.underline);
});
