const router = require('express').Router()
const {Favorite} = require('../db/models')
const db = require('../db');

// GET all octocats
router.get('/', (req, res, next) => {
	Favorite.findAll()
	.then(favorite => 
		res.json(favorite))
	.catch(next);
});


// POST new octocat
router.post('/', (req, res, next)=>{
	Favorite.create({
		name: req.body["hey"]
	})
	.then(favorite => res.status(201).json(favorite))
	.catch(next);
});

module.exports = router;