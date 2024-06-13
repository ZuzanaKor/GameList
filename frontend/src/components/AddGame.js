// src/components/AddGame.js
import React, { useState } from 'react';

function AddGame({ onAdd }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      title,
      genre,
      releaseDate,
      addedAt: new Date().toISOString()
    };
    onAdd(newGame);
    setTitle('');
    setGenre('');
    setReleaseDate('');
  };

  return (
    <div>
      <h2>Add a New Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Release Date:</label>
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default AddGame;