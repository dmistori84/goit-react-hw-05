import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";

// API Key: ebb3ed9b1409881e5c8a20b8bb23e7bc

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
				{/* <Route path="/movies/:movieId/cast" element={<MovieCast />} />
				<Route path="/movies/:movieId/reviews" element={<MovieReviews />} /> */}
			</Routes>
		</>
	);
}

export default App;
