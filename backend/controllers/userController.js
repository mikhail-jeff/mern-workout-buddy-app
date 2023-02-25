const User = require('../models/userModel');

// * LOGIN
const login = async (req, res) => {
	res.json({ message: 'login user' });
};

// * SIGNUP
const signup = async (req, res) => {
	res.json({ message: 'signup user' });
};

module.exports = {
	login,
	signup,
};
