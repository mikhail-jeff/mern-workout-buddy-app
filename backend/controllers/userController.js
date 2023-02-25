const User = require('../models/userModel');

// * LOGIN
const login = async (req, res) => {
	res.json({ message: 'login user' });
};

// * SIGNUP
const signup = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.signup(email, password);

		res.status(200).json({ email, user });
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
};

module.exports = {
	login,
	signup,
};
