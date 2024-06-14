const { Schema, model } = require("mongoose");
const { genSalt, hash, compare } = require("bcrypt");
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

userSchema.pre("save", async function (next) {
	const salt = await genSalt();
	this.password = await hash(this.password, salt);

	next();
});

userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });

	if (user) {
		const userPassword = await compare(password, user.password);

		// If user password matches
		if (userPassword) {
			return user;
		}
		throw Error("incorrect password");
	}
	throw Error("user not found");
};

const User = model("user", userSchema);
module.exports = User;
