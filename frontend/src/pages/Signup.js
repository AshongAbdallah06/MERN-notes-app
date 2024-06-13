import React from "react";

const Signup = () => {
	return (
		<form>
			<h1 className="headings">Signup</h1>
			<div>
				<label>Username</label>
				<input
					type="text"
					name="username"
				/>
				<span className="username error"></span>
			</div>

			<div>
				<label>Email</label>
				<input
					type="text"
					name="email"
				/>
				<span className="email error"></span>
			</div>

			<div>
				<label>Password</label>
				<input
					type="password"
					name="password"
				/>
				<span className="password error"></span>
			</div>

			<button type="submit">Signup</button>
		</form>
	);
};

export default Signup;
