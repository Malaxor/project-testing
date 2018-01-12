
const db = require("../models");

//Defining methods for the PostController
module.exports = {

	create: function(req, res) {

		db.Post
		.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},

	findAll: function(req,res) {
		
		db.Post
		.find(req.query)
		.sort({ date: -1 })
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	}
};