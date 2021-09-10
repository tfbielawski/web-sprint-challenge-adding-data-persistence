const express = require("express");
const router = express.Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
    Resources.findResources()
      .then((findR) => {res.json(findR); })
      .catch(next);
});

router.post("/", (req, res, next) => {
    const newR = req.body
    Resources.postResource(newR)
      .then((addR) => {res.json(addR);})
      .catch(next);
});


module.exports = router;
