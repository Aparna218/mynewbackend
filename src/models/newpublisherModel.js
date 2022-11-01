const mongoose = require('mongoose');

const newpublisherSchema = new mongoose.Schema( {
    author_id: String,
    name: String,
    headquater:String

}, { timestamps: true });

module.exports = mongoose.model('Publisher', newpublisherSchema)
