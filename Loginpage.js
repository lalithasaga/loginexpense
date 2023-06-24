import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './Loginpage.css';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User has successfully logged in.');
        // Do any additional actions after successful login
        navigate('/dashboard'); // Navigate to the dashboard page
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="heading">Login</h1>
        {error && <p>{error}</p>}
        <div>
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
      <div className="signup-label">
        <label>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </label>
      </div>
    </div>
  );
};

export default Loginpage;
