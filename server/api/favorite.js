const router = require('express').Router()
const {Favorite} = require('../db/models')
const db = require('../db');

// GET all pets
router.get('/', (req, res, next) => {
	Favorite.findAll()
	.then(favorite => 
		res.json(favorite))
	.catch(next);
});


// POST new pet
router.post('/', (req, res, next)=>{
	Favorite.create({
		name: req.body["hey"]
	})
	.then(favorite => res.status(201).json(favorite))
	.catch(next);
});

module.exports = router;