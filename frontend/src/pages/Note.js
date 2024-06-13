import React from "react";
import { Link } from "react-router-dom";

const Note = () => {
	return (
		<div className="note-container">
			<div>
				<h1>Hello</h1>
				<p className="created-at">Created At: </p>
			</div>

			<p>Hello World</p>
			<button
				className="delete"
				data-delete=""
			>
				Delete
			</button>

			<Link to="/note/edit/">Edit</Link>
		</div>
	);
};

export default Note;
