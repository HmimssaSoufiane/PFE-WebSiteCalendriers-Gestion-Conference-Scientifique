import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Paperbase from './components/Dashboards/Paperbase';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Dashboard" component={Paperbase} />
      </Router>
    </div>
  );
}

export default App;