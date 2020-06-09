import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DashboardsChair from './components/DashboardsChair/MainDashboadChair';
import MainDashboadAuthor from './components/DashboardsAuthor/MainDashboadAuthor';
import DashboardsScientist from './components/DashboardsScientist/MainDashboadScientist';




function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/DashboardsChair" component={DashboardsChair} />
        <Route path="/DashboardsAuthor" component={MainDashboadAuthor} />
        <Route path="/DashboardsScientist" component={DashboardsScientist} />


      </Router>
    </div>
  );
}

export default App;