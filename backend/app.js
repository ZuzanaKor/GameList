const express = require('express');
const gamesController = require('games.controller.js')
const userController = require('user.controller.js')

const app = express();
// user controller



// game controller
app.get('/api/games/:id', gamesController.get);

app.post('/api/games', gamesController.post);

app.put('/api/games/:id', gamesController.put)

app.delete('/api/games/:id', gamesController.delete);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running')
});