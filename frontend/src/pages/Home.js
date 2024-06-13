import React, { useEffect } from "react";

const Home = ({ data, getData }) => {
	useEffect(() => {
		getData("home");
	}, []);

	return (
		<main>
			<h1 className="headings">Welcome to the Notes App</h1>
			<p>Your one-stop solution for managing notes.</p>
		</main>
	);
};

export default Home;
