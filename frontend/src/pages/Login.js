import React, { useEffect } from "react";

const Login = ({ data, getData }) => {
	useEffect(() => {
		getData("login");
	}, []);

	return (
		<form>
			<h1 className="headings">Login</h1>

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
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
