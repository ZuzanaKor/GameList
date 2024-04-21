require('games.json')
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    id: String, 
    name: String, 
    released: Date, 
    genre: String
});

const Game = mongoose.model('Game', gameSchema);


const jsonData = readFileSync(games, 'utf8');
const data = JSON.parse(jsonData);

function findById(id) {

};


function generateId(game) {
    const newId = "";
    //generate unique ID
    game[id] = newId;
};

module.exports = Game;
module.exports = findById();
module.exports = generateId();