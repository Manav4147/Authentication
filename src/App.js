import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home'; // Import the Home component

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignUp = ({ fullName, course, college, email, password }) => {
    // Assuming you have a User model and you save it to localStorage
    const newUser = { fullName, course, college, email, password };
    console.log('Signing up:', fullName, course, college, email, password);
    localStorage.setItem(email, JSON.stringify(newUser));
    setCurrentUser(newUser);
    setLoggedIn(true);
  };

  const handleLogin = ({ email, password }) => {
    const storedUser = JSON.parse(localStorage.getItem(email));
    console.log('Stored User:', storedUser);
    if (storedUser && storedUser.password === password) {
      setCurrentUser(storedUser);
      setLoggedIn(true);
    } else {
      console.log('Login Failed:', email, password);
      alert('Invalid email or password');
    }
  };
  

  const handleLogout = () => {
    setCurrentUser(null);
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp handleSignUp={handleSignUp} />} />
          <Route
            path="/"
            element={loggedIn ? <Home currentUser={currentUser} handleLogout={handleLogout} /> : <Login handleLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
