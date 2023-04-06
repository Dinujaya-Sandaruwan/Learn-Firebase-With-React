import { useState } from "react";
import { addDoc } from "firebase/firestore";

const AddData = ({ moviesCollectionRef }) => {
	const [newMovieTitle, setNewMovieTitle] = useState("");
	const [newReleseDate, setNewReleseDate] = useState(0);
	const [newMovieOscar, setNewMovieOscer] = useState(false);

	const onSubmitMovie = async () => {
		try {
			await addDoc(moviesCollectionRef, {
				title: newMovieTitle,
				releaseDate: newReleseDate,
				oscarAward: newMovieOscar,
			});
		} catch (error) {
			console.error(error);
		}
		setNewMovieTitle("");
		setNewReleseDate(0);
		setNewMovieOscer(false);
	};

	return (
		<>
			<div className="mb-3">
				<label className="form-label">Name</label>
				<input
					type="text"
					className="form-control"
					onChange={(event) => setNewMovieTitle(event.target.value)}
					value={newMovieTitle}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Relesed Date</label>
				<input
					type="number"
					className="form-control"
					onChange={(event) => setNewReleseDate(Number(event.target.value))}
					value={newReleseDate}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Award</label>
				<select
					className="form-select"
					aria-label="Default select example"
					onChange={(event) => setNewMovieOscer(Boolean(event.target.value))}
				>
					<option disabled selected>
						Open this select menu
					</option>
					<option value={true}>Have a award</option>
					<option value={false}>Haven't a award</option>
				</select>
			</div>

			<button className="btn btn-primary" onClick={onSubmitMovie}>
				Submit
			</button>
		</>
	);
};

export default AddData;
