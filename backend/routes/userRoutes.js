const { Router } = require("express");
const {
	home_get,
	home_redirect,
	login_get,
	signup_get,
	signup_post,
} = require("../controllers/userController.js");

const userRoutes = Router();
const userController = require("../controllers/userController.js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middleware/verifyToken.js");

userRoutes.get("*", verifyToken);

userRoutes.get("/", userController.home_redirect);

userRoutes.get("/home", userController.home_get);

userRoutes.get("/login", userController.login_get);

userRoutes.post("/login", userController.login_post);

userRoutes.get("/signup", userController.signup_get);

userRoutes.post("/signup", userController.signup_post);

userRoutes.post("/logout", userController.logout_get);

module.exports = userRoutes;
