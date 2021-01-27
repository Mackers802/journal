const express = require("express")
const entrysRouter = express.Router()
const Journals = require("../models/journals.js")

entrysRouter.use(express.json())

// get all
entrysRouter.get("/", (req, res, next) => {
    Journals.find((err, entrys) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(entrys)
    })
})

// get one
// entrysRouter.get("/:journalId", (req, res, next) => {
//     Journals.find({type: req.query.emotion}, (err, entry) => {
//       if(err){
//         res.status(500)
//         return next(err)
//       }
//       return res.status(200).send(entry)
//     })
//     })

// post
entrysRouter.post("/", (req, res, next) => {
    const newEntry = new Journals(req.body)
    newEntry.save((err, newEntry) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newEntry)
    })
})

// update
entrysRouter.put("/:journalId", (req, res, next) => {
    Journals.findOneAndUpdate(
        {_id: req.params.journalId},
        req.body,
        {new: true},
        (err, updatedEntry) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(updatedEntry)
    })
})

// delete
entrysRouter.delete("/:journalId", (req, res, next) => {
    Journals.findOneAndDelete({_id: req.params.journalId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
    }
    return res.status(200).send(`${deletedItem.title} journal entry has been deleted`)
    })
})




module.exports = entrysRouter
