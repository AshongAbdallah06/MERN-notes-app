import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import Error from "./pages/Logout";
import Axios from "axios";

export const AppContext = createContext();
function App() {
	const [authenticated, setAuthenticated] = useState(false);

	// Check if user is authenticated
	useEffect(() => {
		const checkAuth = async () => {
			try {
				await Axios.get("http://localhost:3001/home", {
					withCredentials: true,
				});

				setAuthenticated(true);
			} catch (error) {
				console.error(error.response);
			}
		};

		checkAuth();
	}, []);
	return (
		<div className="App">
			<AppContext.Provider value={{ authenticated }}>
				<Router>
					<Header />

					{authenticated ? (
						<Routes>
							<Route
								path="/"
								element={<Home />}
							/>

							{/* Note Routes */}
							<Route
								path="/notes"
								element={<Notes />}
							/>
							<Route
								path="/note"
								element={<Note />}
							/>
							<Route
								path="/note/add"
								element={<AddNote />}
							/>
							<Route
								path="/note/edit"
								element={<EditNote />}
							/>
							{/* Note Routes */}

							{/* User Route */}
							<Route
								path="/user-profile"
								element={<UserProfile />}
							/>

							<Route
								path="/logout"
								element={<Error />}
							/>

							{/* Catch-all route for authenticated users */}
							<Route
								path="*"
								element={<Navigate to="/" />}
							/>
						</Routes>
					) : (
						// {/* Login and Signup Routes */}
						<Routes>
							<Route
								path="/login"
								element={<Login />}
							/>
							<Route
								path="/signup"
								element={<Signup />}
							/>

							{/* Catch-all route for unauthenticated users */}
							<Route
								path="*"
								element={<Navigate to="/login" />}
							/>
						</Routes>
						// {/* Login and Signup Routes */}
					)}

					<Footer />
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
