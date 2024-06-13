import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import Note from "./pages/Note";
import EditNote from "./pages/EditNote";
import UserProfile from "./pages/UserProfile";
import Error from "./pages/404Error";

function App() {
	const [data, setData] = useState("");

	const getData = async (url) => {
		const res = await Axios.get(`http://localhost:3001/${url}`);
		setData(res.data);
	};

	return (
		<div className="App">
			<Router>
				<Header />

				<Routes>
					{/* Home Route */}
					<Route
						path="/"
						element={
							<Home
								data={data}
								getData={getData}
							/>
						}
					/>

					{/* Login and Signup Routes */}
					<Route
						path="/login"
						element={
							<Login
								data={data}
								getData={getData}
							/>
						}
					/>
					<Route
						path="/signup"
						element={
							<Signup
								data={data}
								getData={getData}
							/>
						}
					/>
					{/* Login and Signup Routes */}

					{/* Note Routes */}
					<Route
						path="/notes"
						element={
							<Notes
								data={data}
								getData={getData}
							/>
						}
					/>
					<Route
						path="/note"
						element={
							<Note
								data={data}
								getData={getData}
							/>
						}
					/>
					<Route
						path="/note/add"
						element={
							<AddNote
								data={data}
								getData={getData}
							/>
						}
					/>
					<Route
						path="/note/edit"
						element={
							<EditNote
								data={data}
								getData={getData}
							/>
						}
					/>
					{/* Note Routes */}

					{/* User Route */}
					<Route
						path="/user-profile"
						element={
							<UserProfile
								data={data}
								getData={getData}
							/>
						}
					/>

					<Route
						path="*"
						element={<Error />}
					/>
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
