import React from "react";

const EditNote = () => {
	return (
		<div className="margin-tops">
			<h1 className="headings">Edit Note</h1>

			<form className="add-form">
				<div>
					<label>Title</label>
					<input
						type="text"
						name="title"
					/>
					<span className="title error"></span>
				</div>

				<div>
					<label>Content</label>
					<textarea
						name="content"
						placeholder="Enter your notes here"
					></textarea>
					<span className="content error"></span>
				</div>
				<button type="submit">Add Note</button>
			</form>
		</div>
	);
};

export default EditNote;
