const express = require("express");
const searchHistDB = require("../models/searchHistory");
const router = express.Router();

router.get("/", async function (req, res) {
	// check the search history from DB
	const searchHistory = await searchHistDB.getAllSearches();

	// send it back to the client
	res.json(searchHistory);
});

module.exports = router;
