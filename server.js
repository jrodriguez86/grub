require('dotenv').config();

// Load express:
const express = require("express");
const app = express();

// Set the web server port:
// const port = 3000;

const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 3000;





// Mongoose
const mongoose = require('mongoose');

const session = require('express-session');
const Restaurant = require('./models/restaurants.js');



// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
const methodOverride = require("method-override");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));

// Load methodOverride as middleware
app.use(methodOverride("_method"));

// Link public folder
app.use(express.static('public'))



app.use(session({
    secret: process.env.SECRET, //some random string
    resave: false,
    saveUninitialized: false
}));

app.get('/', (req, res)=>{
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
});

// INDEX
app.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants) => {
      res.render("app/index.ejs", { restaurants });
    })
  })

  app.get("/app", (req, res) => {
    if (req.session.currentUser) {
      Restaurant.find({}, (err, restaurants) => {
        res.render("./app/index.ejs", { restaurants });
      });
    } else {
      res.redirect("/sessions/new");
    }
  });



// Link to users controller
const usersController = require('./controllers/users.js');
app.use('/users', usersController);

// Link to sessions controller
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

// Link page once user is logged in
const restaurantsController = require("./controllers/restaurants.js")
app.use("/app", restaurantsController)


// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});