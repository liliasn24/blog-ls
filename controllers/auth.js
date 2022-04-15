require('dotenv').config();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { createSecureServer } = require('http2');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

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

module.exports.hash = hash;

// register

const registerService = (req, res) => {
	const hashedPassword = hash(req.body.password);
	console.log('hashedPassword:', hashedPassword);
	req.body.password = bcrypt.hashSync(hashedPassword, bcrypt.genSaltSync(10));
	console.log(req.body);

	try {
		const createdUser = await User.create(req.body)
		const token = jwt.sign({
			userName:createdUser.username
		}, SECRET)
		res.status(200).json({ user: createSecureServer, token })
	} catch (err) {
		console.error(err);
		res.status(400).json({ msg: err.message });
	}
};

// verification goes here

// header authentication

// json authentication
