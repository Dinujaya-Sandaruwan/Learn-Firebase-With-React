import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const DeleteData = ({ id }) => {
	const deleteMovie = async (id) => {
		const movieDoc = doc(db, "movies", id);
		await deleteDoc(movieDoc);
	};

	return (
		<button className="btn btn-danger m-2" onClick={() => deleteMovie(id)}>
			Delete
		</button>
	);
};

export default DeleteData;
