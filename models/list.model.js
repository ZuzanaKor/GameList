import { Schema, model } from 'mongoose';

const listSchema = new Schema({
    id: String, 
    name: String, 
    userId: String
});

const List = model('List', listSchema);

export default List;
