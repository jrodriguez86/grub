// Load express:
const express = require("express");
const app = express();

// Set the web server port:
const port = 3000;

const bcrypt = require('bcrypt');


// Mongoose
const mongoose = require('mongoose');

const session = require('express-session');
const Restaurant = require('./models/restaurants.js');



// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
const methodOverride = require("method-override");

mongoose.connect('mongodb://localhost:27017/');

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));

// Load methodOverride as middleware
app.use(methodOverride("_method"));



app.use(session({
    secret: "feedmeseymour", //some random string
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

app.get('/app', (req, res)=>{
    if(req.session.currentUser){
        res.render("./app/index.ejs")
    } else {
        res.redirect('/sessions/new');
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
app.listen(port, () => {
  console.log("listening on port", port);
});