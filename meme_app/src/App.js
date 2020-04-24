import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search';
import GenerateMeme from './components/GenerateMeme';

function App() {
  return (
    <React.Fragment>
      <div className="main-app-style">
         <h2 className="main-page-heading">  Welcome to Meme Generator</h2>
      </div>
      <Router>
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;


// Reference Material: Below video helped to learn about rendering React-App as multi-page app using React-Router
// https://www.youtube.com/watch?v=hjR-ZveXBpQ