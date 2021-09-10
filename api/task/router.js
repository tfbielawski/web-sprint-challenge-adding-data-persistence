const express = require("express");
const router = express.Router();
const Task = require("./model");


module.exports = router;

router.get("/", (req, res, next) => {
    Task.findTask()
        .then((taskT)=>{res.json(taskT)})
        .catch(next)
})

router.post("/",(req, res, next) => {
    const poster = req.body;
    Task.postTask(poster)
        .then((newP) =>{res.json(newP)})
        .catch(next)
})

module.exports = router;