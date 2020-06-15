'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
	admin : ['TRUE', 'FALSE'],
	firstName : String,
	lastName : String,
	username : {
		type : String,
		lowercase : true,
		trim : true,
		unique : true,
		required : true
	},
	hash : {
		type : String,
		required : true
	},
	phoneNumber : String,
	email : {
		type : String,
		lowercase : true,
		unique : true,
		required : true
	}
});

module.exports = mongoose.model('User', userSchema);