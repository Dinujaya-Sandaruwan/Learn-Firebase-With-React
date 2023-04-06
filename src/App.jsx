import { useEffect, useState } from "react";
import Auth from "./components/auth";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

import "./style/index.scss";
import AddData from "./components/AddData";
import DeleteData from "./components/DeleteData";
import UpdateData from "./components/UpdateData";

function App() {
	const [movieList, setMovieList] = useState([]);

	const moviesCollectionRef = collection(db, "movies");

	useEffect(() => {
		const getMovieList = async () => {
			// Read data
			// Set the movie list

			try {
				const data = await getDocs(moviesCollectionRef);
				const filteredData = data.docs.map((docs) => ({
					...docs.data(),
					id: docs.id,
				}));
				// console.log(filteredData);
				setMovieList(filteredData);
			} catch (error) {
				console.error(error);
			}
		};
		getMovieList();
	}, [moviesCollectionRef]);

	return (
		<div className="App">
			<Auth />
			<div className="data">
				{movieList.map((movie) => {
					return (
						<div key={movie.id}>
							<span>
								{movie.title} {movie.releaseDate}
							</span>
							<DeleteData id={movie.id} />
							<UpdateData id={movie.id} />
							<br />
						</div>
					);
				})}
			</div>
			<AddData moviesCollectionRef={moviesCollectionRef} />
		</div>
	);
}

export default App;
