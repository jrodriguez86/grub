const express = require("express");
const router = express.Router();
const Restaurant = require('../models/restaurants.js');
const User = require('../models/users.js');

// NEW
router.get('/new', (req, res)=>{
  res.render("app/new.ejs")
});

// Create
router.post('/', (req, res) => {
   Restaurant.create(req.body, (err, result) => {
     res.redirect("/app")
   })
});

// INDEX
router.get('/', (req, res) => {
  Restaurant.find({}, (err, restaurants) => {
    console.log(restaurants);
    res.render("app/index.ejs", { restaurants: restaurants });
  })
})



  module.exports = router;