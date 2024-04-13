import { useEffect, useRef, useState } from "react";
import { Link, Routes, Route, useParams, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/apiMovieDetails.js";

import MovieCast from "../../components/MovieCast/MovieCast.jsx";
import MovieReviews from "../../components/MovieReviews/MovieReviews.jsx";

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const [movieDetails, setMovieDetails] = useState(null);
	const location = useLocation();
	const backLinkRef = useRef(location.state ?? "/");
	console.log("MovieDetailsPage ~ location:", location);

	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await fetchMovieDetails(movieId);
				setMovieDetails(response);
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
					<div className={css.wrap}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
							alt={movieDetails.title}
							width={300}
						/>
						<Link to={backLinkRef.current} className={css.btnBack}>
							◀ Go back
						</Link>
					</div>
					<h1>Title {movieDetails.title}</h1>
					<h2>Overview: </h2>
					<p>{movieDetails.overview}</p>
					<h2>Genres</h2>
					<p>{movieDetails.genres.map(genre => genre.name).join(", ")}</p>
				</div>
				<div>
					<h2>Additional information</h2>
					<ul>
						<li>
							<Link to="cast">Cast</Link>
						</li>
						<li>
							<Link to="reviews">Reviews</Link>
						</li>
					</ul>
				</div>
				<Routes>
					<Route path="cast" element={<MovieCast />} />
					<Route path="reviews" element={<MovieReviews />} />
					{/* <Route path="/movies/:movieId/cast" element={<MovieCast />} />
					<Route path="/movies/:movieId/reviews" element={<MovieReviews />} /> */}
				</Routes>
			</div>
		)
	);
};

export default MovieDetailsPage;

{
	/* <ul>
		<li>
			<Link to={`/movies/${movieDetails.id}/cast`}>Cast</Link>
		</li>
		<li>
			<Link>Reviews</Link>
		</li>
	</ul>
	<Routes>
		<Route path="/movies/:movieId/cast" element={<MovieCast />} />
		роуте ревью....
	</Routes> 
*/
}
