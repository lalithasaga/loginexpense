import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import axios from 'axios';
import './Signupform.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const signUpData = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx0SVoBQfPlrxT68IwmNR3OKKdQdp-1Yw',
        signUpData
      )
      .then((response) => {
        console.log('User has successfully signed up.');
        // Do any additional actions after successful signup
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User has successfully signed up.');
            navigate('/login'); // Navigate to the login page
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.response.data.error.message);
      });
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="heading">Sign Up</h1>
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
        <div>
          <label className="label">Confirm Password</label>
          <input
            className="input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
      <div className="login-label">
        <label>
          Have an account? <Link to="/login">Login</Link>
        </label>
      </div>
    </div>
  );
};

export default SignupForm;
