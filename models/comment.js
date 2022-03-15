const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
	{
		name: { type: String, required: true },
		message: { type: String, required: true },
		comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
	},
	{
		timestamps: true
	}
);

module.exports = model('Comment', commentSchema);
