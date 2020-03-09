const express = require("express");
const router = express.Router();
const Restaurant = require('../models/restaurants.js');


// NEW
router.get('/new', (req, res)=>{
  res.render("app/new.ejs")
});

// Create
router.post('/new', (req, res) => {
   Restaurant.create(req.body, (err, result) => {
     res.send(result);
   })
});

// INDEX
router.get('/', (req, res) => {
  Restaurant.find({}, (err, restaurants) => {
    res.render("app/index.ejs", { restaurants });
  })
})



  module.exports = router;