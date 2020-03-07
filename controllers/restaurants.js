const express = require("express");
const router = express.Router();
const User = require('../models/users.js');


// NEW
router.get("/new", (req, res) => {
    res.render("/app/new.ejs");
  });



  module.exports = router;