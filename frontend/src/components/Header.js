import React, { useContext } from "react";
import { Link } from "react-router-dom";
import profilePic from "../images/person-circle-outline.svg";
import { AppContext } from "../App";

const Header = () => {
	const { authenticated } = useContext(AppContext);
	return (
		<header>
			{!authenticated && (
				<nav>
					<Link
						to="/"
						className="logo"
					>
						myNotesApp
					</Link>
				</nav>
			)}
			<nav>
				<ul>
					{authenticated ? (
						<>
							<Link to="/">Home</Link>
							<Link to="/notes">My Notes</Link>
						</>
					) : (
						<>
							<Link to="/login">Login</Link>
							<Link to="/signup">Signup</Link>
						</>
					)}
				</ul>
			</nav>

			<nav>
				{authenticated && (
					<>
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
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
