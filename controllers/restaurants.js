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

// SHOW ONE
router.get("/:id", (req, res) => {
  Restaurant.findById(req.params.id, (err, foundRestaurant) => {
    res.render("app/show.ejs", {
      restaurant: foundRestaurant
    });
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/app");
  });
});

// EDIT
router.get("/:id/edit", (req, res) => {
  Restaurant.findById(req.params.id, (err, foundRestaurant) => {
    res.render("edit.ejs", {
      restaurant: foundRestaurant
    });
  });
});

// INDEX
router.get('/', (req, res) => {
  Restaurant.find({}, (err, restaurants) => {
    console.log(restaurants);
    res.render("app/index.ejs", { restaurants: restaurants });
  })
})



  module.exports = router;