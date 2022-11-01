const newpublisherModel= require("../models/newpublisher")

const createnewpublisher= async function (req, res) {
    let newpublisher = req.body
    let newpublisherCreated = await newpublisherModel.create(newpublisher)
    res.send({data: newpublisherCreated})
}

const getnewpublishersData= async function (req, res) {
    let newpublisher = await newpublisherModel.find()
    res.send({data: newpublisher})
}

module.exports.createnewpublisher= createnewpublisher
module.exports.getnewpublishersData= getnewpublishersData