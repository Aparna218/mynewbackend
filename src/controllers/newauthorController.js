const newAuthorModel= require("../models/newauthorModel")

const createnewAuthor= async function (req, res) {
    let newauthor = req.body
    let newauthorCreated = await newAuthorModel.create(newauthor)
    res.send({data: newauthorCreated})
}

const getnewAuthorsData= async function (req, res) {
    let newauthors = await newAuthorModel.find()
    res.send({data: newauthors})
}

module.exports.createnewAuthor= createnewAuthor
module.exports.getnewAuthorsData= getnewAuthorsData