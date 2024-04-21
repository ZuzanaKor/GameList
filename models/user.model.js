import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    id: String,
    username: String,
    password: String,
    email: String,
});

const User = model('User', userSchema);

export default User;
