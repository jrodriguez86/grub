const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users.js')
const Restaurants = require('./restaurants.js')

const grubSchema = new Schema({
    location: String,
    name: String,
    cost: String,
    
});

const Restaurant = mongoose.model('Restaurant', grubSchema);

module.exports = Restaurant;