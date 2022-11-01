const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {
    name: String,
    author: String,
    author_id: {
       type: ObjectId,
        ref: "newAuthor"
    }, 
    price: Number,
    ratings: Number,
    publisher: String


}, { timestamps: true });


module.exports = mongoose.model('newBook', newbookSchema)
