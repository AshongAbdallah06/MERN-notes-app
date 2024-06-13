import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../images/person-circle-outline.svg";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/notes">My Notes</Link>
					<Link to="/signup">Signup</Link>
				</ul>
			</nav>

			<nav>
				Welcome,
				<Link to="/user-profile">
					<img
						className="user-icon"
						src={profilePic}
						alt=""
					/>
				</Link>
				<Link
					className="logout"
					to="/logout"
				>
					Logout
				</Link>
			</nav>
		</header>
	);
};

export default Header;
