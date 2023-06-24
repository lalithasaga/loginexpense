import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/Signupform';
import LoginForm from './components/Loginpage';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
