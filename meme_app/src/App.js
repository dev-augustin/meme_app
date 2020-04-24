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
      <div className="App">
      <h2>  Welcome to Meme Generator</h2>
      <Router>
          <Switch>
            {/* <Route  path = '/' component={Header} /> */}
            {/* <Rounpm start
            te exact path ='/'   component={Links} /> */}
            <Route path='/' component={Home}/>
            {/* <Route exact path='/Search' component={Search} />
            <Route exact path='/GenerateMeme' component={GenerateMeme} /> */}
            {/* <Route exact path='/Header' */}
          </Switch>
      </Router>
      </div>
    </React.Fragment>
  );
}

export default App;


// Reference Material: Below video helped to learn about rendering React-App as multi-page app using React-Router
// https://www.youtube.com/watch?v=hjR-ZveXBpQ