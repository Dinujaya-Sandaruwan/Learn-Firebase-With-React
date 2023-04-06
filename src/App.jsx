import { useEffect, useState } from "react";
import Auth from "./components/auth";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

import "./style/index.scss";

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
				console.log(filteredData);
				setMovieList(filteredData);
			} catch (error) {
				console.error(error);
			}
		};
		getMovieList();
	}, []);

	return (
		<div className="App">
			<Auth />
			<p className="data">
				{movieList.map((movie) => (
					<span key={movie.title}>
						{movie.title} {movie.releaseDate}
					</span>
				))}
			</p>
		</div>
	);
}

export default App;
