const fs = require('fs');
const games = require('games.json');
const List = require('models/List');
const Game = require('models/Game');

const jsonData = fs.readFileSync(games, 'utf8');
const data = JSON.parse(jsonData);

exports.get('/api/lists', async (req, res) => {
    // Logic to retrieve all games
    res.json(List);
});

exports.get('/api/lists/:id', async (req, res) => {
    const listId = req.params.id;
    const list = await List.findOne({listId})

    if (!list) {
        return res.status(404).send('Game not found');
    }
    res.json(list);

});

function generateId() {
    const newId = "";
    //generate unique ID
    return newId;
}

exports.post('/api/lists', async (req, res) => {
    const listId = generateId();
    const listName = req.params.name;
    const listUserId = req.params.userId;

    const newList = new List({id: listId, name: listName, userId: listUserId});
    //List.add newList?
    //data.push({gameId: {id: gameId, name: gameName, released: gameReleased, genre: gameGenre}})
    // try/except
    //fs.writeFileSync(games, JSON.stringify(data, null, 2));
    res.status(201).send('Game created successfully');
});

exports.put('/api/lists/:id', async (req, res) => {
    // Logic to update a game by ID
    const listId = req.params.id;
    const newName = req.params.name;
    const list = await List.findOne({listId})
    list[name] = name;
    //data.push({gameId: {id: gameId, name: gameName, released: gameReleased, genre: gameGenre}})
    // try/except
    //fs.writeFileSync(games, JSON.stringify(data, null, 2));
    res.status(201).send('Game updated successfully');
});

exports.delete('/api/lists/:id', async (req, res) => {
    // Logic to delete a game by ID
    const listId = req.params.id;
    
    //data.delete(gameId);

    // try/except
    //fs.writeFileSync(games, JSON.stringify(data, null, 2));
    res.status(201).send('Game deleted successfully');
});