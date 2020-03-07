const express = require('express');
const router = express.Router();
const User = require('../models/users.js');


// New sessions
router.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});





// Match Username and Password with existing user
router.post('/', (req, res)=>{
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if(req.body.password == foundUser.password){
            res.send('logged in');
        } else {
            res.send('wrong password');
        }
    });
});

module.exports = router;
















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

module.exports = router;
























