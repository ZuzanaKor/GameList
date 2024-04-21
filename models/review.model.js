import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    id: String, 
    userId: String, 
    gameId: String, 
    text: String
});

const Review = model('Review', gameSchema);

export default Review;
