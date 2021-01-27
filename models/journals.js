const mongoose = require("mongoose")
const Schema = mongoose.Schema


const journalsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    journalEntry: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    // emotion: {
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.model("Journals", journalsSchema)