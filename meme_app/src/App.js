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
     <Router>
        <Switch>
          <Route exact path = '/' component={Header} />
          <Route exact path='/Home' component={Home}/>
          <Route exact path='/Search' component={Search} />
          <Route exact path='/GenerateMeme' component={GenerateMeme} />
        </Switch>
     </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
