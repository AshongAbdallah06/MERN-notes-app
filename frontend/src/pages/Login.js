import React, { useEffect, useState } from "react";

const Login = ({ data, getData }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [errors, setErrors] = useState({ email, password });

	const login = async () => {
		const response = await fetch("http://localhost:3001/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: { "Content-Type": "application/json" },
		});

		const data = await response.json();

		if (data.errors) {
			setErrors({
				email: data.errors.email,
				password: data.errors.password,
			});
		} else {
			setErrors({
				email: "",
				password: "",
			});
		}

		if (data.user) {
			window.location.href = "/";
		}
	};

	useEffect(() => {
		getData("login");
	}, []);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				login();
			}}
		>
			<h1 className="headings">Login</h1>

			<div>
				<label>Email</label>
				<input
					type="text"
					name="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<span className="email error">{errors.email}</span>
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					name="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<span className="password error">{errors.password}</span>
			</div>
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
