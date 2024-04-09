import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { fetchSearchMovies } from "../../services/apiSearchMovies";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
	const [value, setValue] = useState("");
	const [films, setfilms] = useState([]);
	const [query, setQuery] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		console.log(value);
		setQuery(value);
	};

	const handleChange = event => {
		setValue(event.target.value);
	};

	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await fetchSearchMovies(query);
				setfilms(response.results);
			} catch (error) {
				console.log(error);
			}
		}
		fetchMovies();
	}, [query]);

	return (
		<div>
			<form onSubmit={handleSubmit} className={css.SearchForm}>
				<input
					className={css.SearchFormInput}
					onChange={handleChange}
					type="text"
					autoComplete="off"
					autoFocus
				/>
				<button className={css.SearchFormButton} type="submit">
					Search
				</button>
			</form>
			<MovieList movies={films} />
		</div>
	);
};

export default MoviesPage;
