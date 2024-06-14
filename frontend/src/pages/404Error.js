import { useEffect } from "react";

const Error = () => {
	const handleLogout = async () => {
		const response = await fetch("http://localhost:3001/logout", {
			method: "POST",
			body: "Logged out",
			credentials: "include",
		});

		// Redirect back to home
		window.location.href = "/";
	};

	// Make request when page mounts
	useEffect(() => {
		handleLogout();
	}, []);
};

export default Error;
