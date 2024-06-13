// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Button from './components/Button';
import GameList from './components/GameList';
import AddGame from './components/AddGame';
import GameInfo from './components/GameInfo';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [games, setGames] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserDropdownVisible, setIsUserDropdownVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/games')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const addGame = (game) => {
    fetch('http://localhost:5000/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    })
      .then(response => response.json())
      .then(newGame => setGames([...games, newGame]))
      .catch(error => console.error('Error adding game:', error));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownVisible(!isUserDropdownVisible);
  };

  const handleQuickLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <Router>
      <div className="matrix-background"></div>
      <div className="container">
        <div className="center-block">
          <header className="App-header">
            <h1>GameList</h1>
            <ConditionalNav
              isLoggedIn={isLoggedIn}
              handleQuickLinkClick={handleQuickLinkClick}
              toggleUserDropdown={toggleUserDropdown}
              isUserDropdownVisible={isUserDropdownVisible}
              handleLogout={handleLogout}
            />
          </header>
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<GameList games={games} />} />
              <Route path="/add" element={<AddGame onAdd={addGame} />} />
              <Route path="/game/:id" element={<GameInfo games={games} />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup />} />
              {/* Add routes for signup and my-lists as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      {/* Home content */}
    </div>
  );
}

const ConditionalNav = ({ isLoggedIn, handleQuickLinkClick, toggleUserDropdown, isUserDropdownVisible, handleLogout }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/signup';

  if (isLoginPage) {
    return null;
  }

  return (
    <>
      <div className="decorative-line"></div>
      <nav>
        <Button label="Home" onClick={() => handleQuickLinkClick('/')} />
        <Button label="Games" onClick={() => handleQuickLinkClick('/games')} />
        <div className="user-menu">
          <button onClick={toggleUserDropdown}>User</button>
          {isUserDropdownVisible && (
            <div className="user-dropdown">
              {isLoggedIn ? (
                <>
                  <Link to="/my-lists">My Lists</Link>
                  <button onClick={handleLogout}>Log Out</button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
      <div className="decorative-line"></div>
    </>
  );
};

export default App;