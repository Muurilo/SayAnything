const mongoose = require("mongoose")

const EditSchema = new mongoose.Schema({
    name: String,
    content: String,
})

module.exports = mongoose.model('Edit', EditSchema)
