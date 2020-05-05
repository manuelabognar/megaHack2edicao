const mongoose = require('mongoose');

const ArchivesSchema = new mongoose.Schema({
	book: String,
	number: Number,
	place: String,
	archive: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	toJSON: {
		virtuals: true,
	}
});

ArchivesSchema.virtual('archive_url').get(function () {
	return `http://localhost:3333/files/${this.archive}`
});

module.exports = mongoose.model('Archives', ArchivesSchema);