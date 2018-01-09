const router = require('express').Router()
const {Favorite} = require('../db/models')
const db = require('../db');

// GET all categories
router.get('/', (req, res, next) => {
	Favorite.findAll()
	.then(favorite => {
		console.log("raj", favorite)
		res.json(favorite)})

	.catch(next);
});


// POST new category
router.post('/', (req, res, next)=>{
	console.log("backend", req)
	Favorite.create({
		name: req.body["hey"]
	})
	.then(favorite => res.status(201).json(favorite))
	.catch(next);
});

module.exports = router;