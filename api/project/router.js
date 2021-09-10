const express = require("express");
const router = express.Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.findProjects()
    .then((findP) => {res.json(findP);})
    .catch(next);
});

router.post("/", (req, res, next) => {
  const newP = req.body;
  Projects.postProjects(newP)
    .then((addP) => {res.json(addP);})
    .catch(next);
});

module.exports = router;