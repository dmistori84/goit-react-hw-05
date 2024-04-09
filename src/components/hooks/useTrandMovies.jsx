import { useEffect } from "react";
import { fetchTrandMovies } from "../../services/apiTrandMovies";
import { useState } from "react";

export const useTrandMovies = () => {
	const [films, setfilms] = useState([]);
	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await fetchTrandMovies();
				console.log(response.results);
				setfilms(response.results);
			} catch (error) {
				console.log(error);
			}
		}
		fetchMovies();
	}, []);
	return films;
};
