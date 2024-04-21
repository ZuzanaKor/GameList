import express from 'express';
import { get, post, put, del } from 'games.controller.js';
import userController from 'user.controller.js';

const app = express();
// user controller



// game controller
app.get('/api/games/:id', get);

app.post('/api/games', post);

app.put('/api/games/:id', put)

app.delete('/api/games/:id', del);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running')
});