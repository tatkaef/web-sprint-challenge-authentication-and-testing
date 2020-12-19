const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../../middleware/restricted.js");


router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users); // or res.status(200).json(users)
    })
    .catch(err => res.send(err));
});

module.exports = router;