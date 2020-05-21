import React from 'react';
import { Button } from 'antd';
import { Router, Route } from "react-router-dom";

import history from './history';
import LoginContainer from './components/Login/loginContainer.jsx';
import SignupContainer from './components/Signup/signupContainer.jsx';
import HomeContainer from './components/Home/homeContainer.jsx';
import logo from './logo.svg';
import './App.less';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/home" component={HomeContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
