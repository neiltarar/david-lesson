const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const searchHistorySchema = new Schema({
	search: String,
	count: Number,
});

const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema);

async function findSearchedMovie(movieName) {
	const search = await SearchHistory.find({ search: movieName });
	return search;
}

async function saveSearchedMovie(movieName) {
	const search = new SearchHistory({ search: movieName, count: 1 });
	await search.save();
}

async function getAllSearches() {
	const searches = await SearchHistory.find();
	return searches;
}

const searchHistoryDb = {
	findSearchedMovie,
	saveSearchedMovie,
	getAllSearches,
};

module.exports = searchHistoryDb;
