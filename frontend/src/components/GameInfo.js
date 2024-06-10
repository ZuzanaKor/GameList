// src/components/GameInfo.js
import React from 'react';
import { useParams } from 'react-router-dom';

function GameInfo({ games }) {
  const { id } = useParams();
  const game = games.find(game => game.id === parseInt(id));

  if (!game) {
    return <h2>Game not found</h2>;
  }

  return (
    <div>
      <h2>{game.name}</h2>
      <p>{game.releaseDate}</p>
      <p>{game.genre}</p>
      <p>{game.description}</p>
    </div>
  );
}

export default GameInfo;