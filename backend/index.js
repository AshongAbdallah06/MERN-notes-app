import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();

const dbURI = "mongodb://localhost:27017/notes-app";
connect(dbURI)
	.then(() => {
		app.listen(3001);
		console.log("Connected and Listening to PORT 3001");
	})
	.catch((err) => {
		console.log(err);
	});

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
