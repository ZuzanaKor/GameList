// src/components/Game.js
import React from 'react';
import { Link } from 'react-router-dom';

function Game({ game }) {
  return (
    <li>
      <h3>{game.name}</h3>
      <p>{game.description}</p>
      <Link to={`/game/${game.id}`}>View Details</Link>
    </li>
  );
}

export default Game;