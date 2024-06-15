import React from "react";
import { Link } from "react-router-dom";

const Note = () => {
	return (
		<div className="note-container">
			<div className="top">
				<div>
					<h1>Hello</h1>
					<p className="created-at">Created At: </p>
				</div>
				<button
					className="delete"
					data-delete=""
				>
					Delete
				</button>
			</div>

			<div className="bottom">
				<p>Hello World</p>

				<Link to="/note/edit/">Edit</Link>
			</div>
		</div>
	);
};

export default Note;
