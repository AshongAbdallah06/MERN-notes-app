import React from "react";
import profilePic from "../images/person-circle-outline.svg";
import { Link } from "react-router-dom";

const UserProfile = () => {
	return (
		<div className="profile-container">
			<div className="personal-info">
				<div className="profile-header">
					<img
						src={profilePic}
						alt="Profile"
						className="profile-picture"
					/>
					<h1 className="headings profile-name">Welcome </h1>
					<p className="profile-bio"></p>
				</div>

				<div className="profile-section">
					<h2>Contact Information</h2>
					<p>
						<strong>Email: &nbsp;</strong>
					</p>
					<p>
						<strong>Phone: &nbsp;</strong>
					</p>
					<p>
						<strong>Location: &nbsp;</strong>
					</p>
				</div>

				<div className="profile-section">
					<h2>Personal Information</h2>
					<p>
						<strong>Date of Birth: &nbsp;</strong>
					</p>
					<p>
						<strong>Gender: &nbsp;</strong>
					</p>
				</div>

				<div className="profile-section">
					<h2>Social Media</h2>
					<p>
						<strong>Facebook:</strong>
						<Link to="https://facebook.com/"></Link>
					</p>
					<p>
						<strong>Twitter:</strong>
						<Link to="https://twitter.com/"></Link>
					</p>

					<p>
						<strong>Instagram:</strong>
						<Link to="https://instagram.com/"></Link>
					</p>
				</div>

				<div className="profile-section">
					<h2>Preferences</h2>
					<p>
						<strong>Language Preference: &nbsp;</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
