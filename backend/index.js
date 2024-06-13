const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes.js");

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
