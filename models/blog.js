const { Schema, model } = require('mongoose');

//create schema

const blogSchema = new Schema(
	{
		title: { type: String, required: true, unique: true },
		body: String
	},
	{
		timestamps: true
	}
);

module.exports = model('Blog', blogSchema);
