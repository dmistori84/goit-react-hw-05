import axios from "axios";

export const fetchMovieDetails = async movieId => {
	const options = {
		method: "GET",
		url: `https://api.themoviedb.org/3/movie/${movieId}`,
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

// import axios from "axios";

// const API_KEY = "ebb3ed9b1409881e5c8a20b8bb23e7bc";
// const baseURL = "https://api.themoviedb.org/3";

// const defaultParams = {
// 	api_key: API_KEY,
// 	language: "en-US",
// 	// imageUrl: "https://image.tmdb.org/t/p/w500",
// };

// const instance = axios.create({
// 	baseURL: baseURL,
// 	params: defaultParams,
// });

// export const fetchMovieDetails = async movieId => {
// 	try {
// 		const { data } = await instance.get(`/movie/${movieId}`);
// 		console.log("data в фетче", data);
// 		return data;
// 	} catch (error) {
// 		console.error("Error fetching movie details:", error);
// 		throw error;
// 	}
// };
