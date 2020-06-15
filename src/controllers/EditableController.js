const EditModel = require("../models/Edit")

module.exports = {
    edit: function (req, res) {
        if(req.body.content === undefined) {
            res.sendStatus(500);
        }
        EditModel.updateOne({name: 'maincontent'}, {name: 'maincontent', content: req.body.content}, {upsert: true}, function (error, result) {
            if(error) {
                res.sendStatus(500)
            }
            res.sendStatus(200)
        });
    },
    get: function (req, res) {
        EditModel.find({name: 'maincontent'}, function (err, docs) {
            if(err) {
                throw err;
            }
            if(docs[0] === undefined) {
                res.status(200).json({content: ""})
            }else {
                res.status(200).json({content: docs[0].content})
            }
        })
    }
}