const newauthorModel = require("../models/newauthorModel")
const newbookModel= require("../models/newbookModel")

const createnewBook= async function (req, res) {
    let newbook = req.body
    let newbookCreated = await newbookModel.create(book)
    res.send({data: newbookCreated})
}

const getnewBooksData= async function (req, res) {
    let newbooks = await newbookModel.find()
    res.send({data: newbooks})
}

const getnewBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await newbookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createnewBook= createnewBook
module.exports.getnewBooksData= getnewBooksData
module.exports.getnewBooksWithAuthorDetails = getnewBooksWithAuthorDetails
