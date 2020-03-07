const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/users.js')
const Restaurants = require('../models/restaurants.js')

const foodSchema = new Schema({
    Restaurant: String,
    Stars: String
});

const Restaurant = mongoose.model('Restaurant', userSchema);

module.exports = Restaurant;