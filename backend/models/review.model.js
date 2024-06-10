const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    id: String, 
    userId: String, 
    gameId: String, 
    text: String
});

const Review = mongoose.model('Review', gameSchema);

module.exports = Review;
