const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const path = require("path")

const secret = process.env.SECRET || "Journal Entrys App"

app.use(morgan("dev"))
app.use("/journal", require("./routes/entrysRouter.js"))

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose.connect("process.env.MONGODB_URI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, 
() => console.log("connected to journals Db"))
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Running on server ${port}`)
})