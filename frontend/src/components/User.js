// src/components/User.js
import React from 'react';
import { Link } from 'react-router-dom';

function User({ User }) {
  return (
    <li>
      <h3>{User.name}</h3>
      <Link to={`/User/${User.id}`}>View Details</Link>
    </li>
  );
}

export default User;