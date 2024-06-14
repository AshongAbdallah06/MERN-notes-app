const { Schema, model } = require("mongoose");
const { genSalt, hash } = require("bcrypt");
const { isEmail, isStrongPassword } = require("validator");

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, "This field is required"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "Enter a valid email address"],
	},
	password: {
		type: String,
		required: [true, "This field is required"],
		validate: [isStrongPassword, "Enter a strong Password"],
	},
	username: {
		type: String,
		required: [true, "This field is required"],
		minlength: [3, "Must be at least 3 characters"],
		unique: true,
		lowercase: true,
	},
});

userSchema.pre("save", async function () {
	const salt = await genSalt();
	this.password = await hash(this.password, salt);
});

const User = model("user", userSchema);
module.exports = User;
