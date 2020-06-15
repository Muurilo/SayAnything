const EditModel = require("../models/Edit")

module.exports = {
    edit: function (req, res) {
        EditModel.find({name: 'maincontent'}, function (err, docs) {
            if(err) {
                throw err;
            }
            if(docs.length === 0) {
                var newEdit = new EditModel({
                    name: 'maincontent',
                    content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                })
                newEdit.save()
            }else {
                EditModel.findOne({ name: 'maincontent' }, function (err, doc) {
                    if (err) {
                        throw err;
                    }
                    doc.content = 'aaaaaa';
                    doc.save();
                })
            }
        })
    }
}