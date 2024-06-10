const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    id: String, 
    name: String, 
    userId: String
});

const List = mongoose.model('List', listSchema);

module.exports = List;
