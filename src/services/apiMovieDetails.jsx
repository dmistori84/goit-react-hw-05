import axios from "axios";

export const fetchMovieDetails = async movieId => {
	const options = {
		method: "GET",
		url: `https://api.themoviedb.org/3/search/movie/${movieId}`,
		params: { language: "en-US" },
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmIzZWQ5YjE0MDk4ODFlNWM4YTIwYjhiYjIzZTdiYyIsInN1YiI6IjY0N2EzNzhmMGUyOWEyMDExNmFjM2FmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dE0z1_l67yK1oA-lkZj4iKHTCpMoEcYq9w-JhEAtZ0A",
		},
	};

	const { data } = await axios.request(options);
	console.log("fetchMovieDetails ~ data:", data);
	return data;
};
