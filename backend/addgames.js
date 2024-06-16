const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const gamesFilePath = path.join(__dirname, 'games.json');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle CORS
app.use(cors());

// Endpoint to add a new game
app.post('/addgame', (req, res) => {
  const newGame = req.body;

  // Read the existing games from the file
  fs.readFile(gamesFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading games file:', err);
      return res.status(500).send('Internal Server Error');
    }

    let games = [];
    try {
      games = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing games file:', parseError);
      return res.status(500).send('Internal Server Error');
    }

    // Add the new game to the list
    games.push(newGame);

    // Write the updated games list back to the file
    fs.writeFile(gamesFilePath, JSON.stringify(games, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to games file:', writeErr);
        return res.status(500).send('Internal Server Error');
      }

      res.status(201).send('Game added successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});