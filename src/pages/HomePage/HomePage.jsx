import MovieList from "../../components/MovieList/MovieList";
import { useTrandMovies } from "../../components/hooks/useTrandMovies";

// adult: false;
// backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg";
// genre_ids: (2)[(878, 12)];
// id: 693134;
// media_type: "movie";
// original_language: "en";
// original_title: "Dune: Part Two";
// overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.";
// popularity: 1380.968;
// poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg";
// release_date: "2024-02-27";
// title: "Dune: Part Two";
// video: false;
// vote_average: 8.358;
// vote_count: 2519;

const HomePage = () => {
	const films = useTrandMovies();
	return (
		<div>
			Home Page
			<MovieList movies={films} />
		</div>
	);
};

export default HomePage;
