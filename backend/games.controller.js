const fs = require('fs');
const games = require('games.json');
const Game = require('models/Game');

const jsonData = fs.readFileSync(games, 'utf8');
const data = JSON.parse(jsonData);

exports.get('/api/games', async (req, res) => {
    // Logic to retrieve all games
    res.json(data);
});

exports.get('/api/games/:id', async (req, res) => {
    // Logic to retrieve a specific game by ID
    const gameId = req.params.id;
    // Find the game with the specified ID
    const game = data[gameId];
    if (!game) {
        return res.status(404).send('Game not found');
    }
    res.json(game);
});

function generateId() {
    const newId = "";
    //generate unique ID
    return newId;
}

exports.post('/api/games', async (req, res) => {
    const gameId = generateId();
    const gameName = req.params.name;
    const gameReleased = req.params.released;
    const gameGenre = req.params.genre;

    const newGame = new Game({id: gameId, name: gameName, released: gameReleased, genre: gameGenre});
    data.push({gameId: {id: gameId, name: gameName, released: gameReleased, genre: gameGenre}})
    // try/except
    fs.writeFileSync(games, JSON.stringify(data, null, 2));
    res.status(201).send('Game created successfully');
});

exports.put('/api/games/:id', async (req, res) => {
    // Logic to update a game by ID
    const gameId = req.params.id;
    data[gameId][name] = req.params.name;
    data[gameId][released] = req.params.released;
    data[gameId][genre] = req.params.genre;
 
    data.push({gameId: {id: gameId, name: gameName, released: gameReleased, genre: gameGenre}})
    // try/except
    fs.writeFileSync(games, JSON.stringify(data, null, 2));
    res.status(201).send('Game updated successfully');
});

exports.delete('/api/games/:id', async (req, res) => {
    // Logic to delete a game by ID
    const gameId = req.params.id;
    
    data.delete(gameId);

    // try/except
    fs.writeFileSync(games, JSON.stringify(data, null, 2));
    res.status(201).send('Game deleted successfully');
});