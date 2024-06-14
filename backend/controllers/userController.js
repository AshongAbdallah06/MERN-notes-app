const User = require("../models/User");

const handleErrors = (err) => {
	const errors = { email: "", password: "", username: "" };

	// Check if email has been registered
	if (err.code === 11000 && err.message.includes("email")) {
		errors.email = "Email already registered";
	}

	// Check if username has been registered
	if (err.code === 11000 && err.message.includes("username")) {
		errors.username = "Username already registered";
	}

	if (err.message.includes("user validation failed")) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}

	// Login check
	if (err.message.includes("user not found")) {
		errors.email = "Email has not been registered";
	}

	if (err.message.includes("incorrect password")) {
		errors.password = "Incorrect Password";
	}

	return errors;
};

const home_redirect = (req, res) => {
	res.redirect("home");
};

const home_get = (req, res) => {
	res.send("home");
};

const login_get = (req, res) => {
	res.send("login");
};

const login_post = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.login(email, password);
		res.status(201).json({ user });
	} catch (err) {
		const errors = await handleErrors(err);
		res.status(403).json({ errors });
	}
};

const signup_get = (req, res) => {
	res.send(req.body);
};

const signup_post = async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json({ user });
	} catch (err) {
		const errors = await handleErrors(err);
		res.status(403).json({ errors });
	}
};
module.exports = { home_redirect, home_get, login_get, login_post, signup_get, signup_post };
