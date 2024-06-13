import { Router } from "express";
import {
	home_get,
	home_redirect,
	login_get,
	signup_get,
	signup_post,
} from "../controllers/userController.js";

export const userRoutes = Router();

userRoutes.get("/", home_redirect);

userRoutes.get("/home", home_get);

userRoutes.get("/login", login_get);

userRoutes.get("/signup", signup_get);

userRoutes.post("/signup", signup_post);
