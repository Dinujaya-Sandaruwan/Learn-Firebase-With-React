import { useState } from "react";
import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

const UpdateData = ({ id }) => {
	const [updatedTitle, setUpdatedTitle] = useState("");
	const updateMovie = async (id) => {
		const movieDoc = doc(db, "movies", id);
		await updateDoc(movieDoc, { title: updatedTitle });
	};

	return (
		<>
			<input
				type="text"
				onChange={(event) => setUpdatedTitle(event.target.value)}
			/>
			<button className="btn btn-secondary m-3" onClick={() => updateMovie(id)}>
				Update
			</button>
		</>
	);
};

export default UpdateData;
