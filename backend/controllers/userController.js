const { User } = require("../models/User.js");

const home_redirect = (req, res) => {
	res.redirect("home");
};

const home_get = (req, res) => {
	res.send("home");
};

const login_get = (req, res) => {
	res.send("login");
};

const signup_get = (req, res) => {
	res.send(req.body);
};

const signup_post = async (req, res) => {
	res.json(req.body);

	const user = await User.create(req.body);
};
module.exports = { home_redirect, home_get, login_get, signup_get, signup_post };
