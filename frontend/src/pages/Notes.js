import React from "react";
import { Link } from "react-router-dom";
import addBtn from "../images/add-circle-outline.svg";

const Notes = () => {
	return (
		<div className="margin-tops">
			<h1 className="headings">My Notes</h1>
			<div className="notes">
				<Link
					to="/note"
					className="note-link"
				>
					<li>
						<h3>Lorem</h3>
						<span className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo
							quae ut animi, iure quaerat eveniet! Consectetur ratione laudantium,
							aliquam ipsam repellendus beatae accusamus quam neque praesentium
							reiciendis explicabo minus?
						</span>
					</li>
				</Link>

				<Link to="/note/add">
					<li className="add">
						<img
							src={addBtn}
							alt="add-button"
						/>
					</li>
				</Link>
			</div>
		</div>
	);
};

export default Notes;
