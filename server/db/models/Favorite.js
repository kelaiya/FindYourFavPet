const Sequelize = require('sequelize');
const db = require('../db');

const Favorite = db.define('favorite',{
	name: {
		type: Sequelize.STRING
	}
});

module.exports = Favorite;