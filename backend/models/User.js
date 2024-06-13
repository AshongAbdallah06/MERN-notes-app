const { Schema, model } = require("mongoose");
const { genSalt, hash } = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		validate: [isEmail, "Enter a valid email address"],
	},
	password: {
		type: String,
		required: true,
		// validate: [isStrongPassword, "Enter a strong Password"],
	},
	username: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
});

userSchema.pre("save", async function () {
	const salt = await genSalt();
	this.password = await hash(this.password, salt);

	console.log(this.password);
});

const User = model("user", userSchema);
module.exports = User;
