// Load express:
const express = require("express");
const app = express();

// Set the web server port:
const port = 3000;

const bcrypt = require('bcrypt');


// Mongoose
const mongoose = require('mongoose');

// Link to users controller
const usersController = require('./controllers/users.js');


// Link to sessions controller
const sessionsController = require('./controllers/sessions.js');




// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
const methodOverride = require("method-override");

mongoose.connect('mongodb://localhost:27017/auth');

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));

// Load methodOverride as middleware
app.use(methodOverride("_method"));

///// ROUTES /////


app.use('/users', usersController);

app.use('/sessions', sessionsController);

// // EDIT
// app.get("/items/:id/edit", (req, res) => {
//   res.render("edit.ejs", {
//     item: items[req.params.id],
//     index: req.params.id
//   });
// });

// // UPDATE
// app.put("/:id", (req, res) => {
//   items[req.params.id] = req.body;
//   res.redirect("/");
// });

// // SHOW
// app.get("/:id", (req, res) => {
//   res.render("show.ejs", { item:[req.params.id] });
// });

// // DESTROY
// app.delete("/:id", (req, res) => {
//   items.splice(req.params.id, 1); //remove the item from the array
//   res.redirect("/"); //redirect to index page
// });

// // CREATE
// app.post("/", (req, res) => {
//   let index = items.push(req.body) - 1;
//   res.redirect(`/items/${index}`);
// });



// // // Create User
// // router.post('/', (req, res) => {
// //     User.create(req.body, (err, createdUser)=>{
// //         res.redirect('/');    
// //     });
// // });

// // INDEX
// app.get("/", (req, res) => {
//   res.render("index.ejs")
// });

// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
  console.log("listening on port", port);
});