const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const restaurantSchema = new Schema({
    location: String,
    name: String,
    cost: String,
    
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;