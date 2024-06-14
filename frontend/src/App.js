import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
	return (
		<div className="App">
			<Router>
				<Header />

				<Routes>
					{/* Home Route */}
					<Route
						path="/"
						element={<Home />}
					/>

					{/* Login and Signup Routes */}
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/signup"
						element={<Signup />}
					/>
					{/* Login and Signup Routes */}

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

					<Route
						path="*"
						element="404 Error. Page not found"
					/>
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
