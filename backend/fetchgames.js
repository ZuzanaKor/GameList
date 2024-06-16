const fs = require('fs');
const path = require('path');

const gamesFilePath = path.join(__dirname, 'games.json');

// Read the games from the file
fs.readFile(gamesFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading games file:', err);
    return;
  }

  let games = [];
  try {
    games = JSON.parse(data);
  } catch (parseError) {
    console.error('Error parsing games file:', parseError);
  }

  // Sort the games by the addedAt timestamp in descending order
  games.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));

  // Get the three most recently added games
  const recentGames = games.slice(0, 3);

  console.log('Most recently added games:', recentGames);
});