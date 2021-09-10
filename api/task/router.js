const express = require("express")
const router = express.Router()
const Task = require("./model");

router.get("/", (req, res, next) => {
    Task.findTasks()
        .then((newTask) => { res.json(newTask);})
        .catch(next);
});

router.post("/", (req, res, next) => {
    const newP = req.body;
    console.log(newP)
    Task.postTask(newP)
        .then((nextP) => {res.json(nextP);})
        .catch(next);
});


module.exports = router;