import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";
import css from "./Navigation.module.css";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

const Navigation = () => {
	const addActiveClass = ({ isActive }) =>
		clsx(css.navLink, {
			[css.active]: isActive,
		});

	return (
		<header>
			<nav className={css.nav}>
				<NavLink to="/" className={addActiveClass}>
					Home
				</NavLink>
				<NavLink to="/movies" className={addActiveClass}>
					Movies
				</NavLink>
			</nav>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/movies/:movieId" element={<MovieDetailsPage />} />
			</Routes>
		</header>
	);
};

export default Navigation;
