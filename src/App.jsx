// import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
// API Key: 38d20a621f96553ce89394ad9ba14a0a

function App() {
	return (
		<>
			<nav>
				<NavLink to="/">Home</NavLink>
			</nav>
			<nav>
				<NavLink to="/movies">Movies</NavLink>
			</nav>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
