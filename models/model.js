const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);