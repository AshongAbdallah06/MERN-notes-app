import { User } from "../models/User.js";

export const home_redirect = (req, res) => {
	res.redirect("home");
};

export const home_get = (req, res) => {
	res.send("Helo");
};

export const login_get = (req, res) => {
	res.send("login");
};

export const signup_get = (req, res) => {
	res.send(req.body);
};

export const signup_post = async (req, res) => {
	res.json(req.body);

	const user = await User.create(req.body);
};
