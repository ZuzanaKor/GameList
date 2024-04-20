const express = require('express');
const app = express();

app.get('/api/games', (req, res) => {
    // Logic to retrieve all games
    res.json({ games: ""/* Array of games */ });
});

app.get('/api/games/:id', (req, res) => {
    // Logic to retrieve a specific game by ID
    const gameId = req.params.id;
    // Find the game with the specified ID
    const game = ""/* Find game by ID */;
    if (!game) {
        return res.status(404).send('Game not found');
    }
    res.json(game);
});

app.post('/api/games', (req, res) => {
    // Logic to create a new game
    res.status(201).send('Game created successfully');
});

app.put('/api/games/:id', (req, res) => {
    // Logic to update a game by ID
    const gameId = req.params.id;
    // Logic to update the game with the specified ID using data from req.body
    res.send('Game updated successfully');
});

app.delete('/api/games/:id', (req, res) => {
    // Logic to delete a game by ID
    const gameId = req.params.id;
    // Logic to delete the game with the specified ID
    res.send('Game deleted successfully');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running')
});