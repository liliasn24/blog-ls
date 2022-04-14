require('dotenv').config();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Hashing function

const hash = password => {
	const levelOne = crypto
		.createHmac('sha256', process.env.SECRET)
		.update(password)
		.digest('hex')
		.split('')
		.reverse()
		.join('j');
	return crypto
		.createHmac('sha256', process.env.SECRET)
		.update(levelOne)
		.digest('hex')
		.split('')
		.reverse()
		.join('');
};

// verification goes here

// register

// header authentication

// json authentication
