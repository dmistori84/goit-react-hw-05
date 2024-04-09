import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/apiMovieDetails";

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const [movieDetails, setMovieDetails] = useState(null);

	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await fetchMovieDetails(movieId);
				console.log("ответ в деталях фильма", response);
				setMovieDetails(response.results);
			} catch (error) {
				console.log(error);
			}
		}
		fetchMovies();
	}, [movieId]);

	return (
		movieDetails && (
			<div>
				<div>
					<img src="" alt="" />
					<h1>Title {movieDetails.title}</h1>
					<h2>Overview</h2>
					<h3>Genres</h3>
				</div>
				<div>
					<h2>Additional information</h2>
					<ul>
						<li>Cast</li>
						<li>Reviews</li>
					</ul>
				</div>
			</div>
		)
	);
};

export default MovieDetailsPage;
