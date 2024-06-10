// src/components/GameList.js
import React from 'react';
import Game from './Game';

function GameList({ games }) {
  return (
    <div>
      <h2>Game List</h2>
      <ul>
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default GameList;