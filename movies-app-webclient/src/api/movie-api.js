export const fetchMovies = async (searchQuery) => {
	console.log("searchQuery = ", searchQuery);
	const url = `/movies/${searchQuery}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export const fetchMovieDetails = async (imdbID) => {
	const url = `/movies/id/${imdbID}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
