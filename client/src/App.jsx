import React from 'react';
import { Button } from 'antd';
import { Router, Route } from "react-router-dom";

import history from './history';
import Login from './Login/login.jsx';
import logo from './logo.svg';
import './App.less';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
