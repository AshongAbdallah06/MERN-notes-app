import React, { useEffect, useState } from "react";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitForm = async () => {
		const response = await fetch("http://localhost:3001/signup", {
			method: "POST",
			body: JSON.stringify({ username, email, password }),
			headers: { "Content-Type": "application/json" },
		});
	};

	useEffect(() => {}, [username, email, password]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				submitForm();
			}}
		>
			<h1 className="headings">Signup</h1>
			<div>
				<label>Username</label>
				<input
					type="text"
					name="username"
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<span className="username error"></span>
			</div>

			<div>
				<label>Email</label>
				<input
					type="text"
					name="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<span className="email error"></span>
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
				<span className="password error"></span>
			</div>

			<button type="submit">Signup</button>
		</form>
	);
};

export default Signup;
