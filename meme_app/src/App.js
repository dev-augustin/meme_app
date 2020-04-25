import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  console.log("hi");
  return (
    <React.Fragment>
      <div>
        <div className="main-app-style">
          <h2 className="main-page-heading">  Welcome to Meme Generator</h2>
        </div>
        <div className="router-links">
          <Home/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;


// Reference Material: Below video helped to learn about rendering React-App as multi-page app using React-Router
// https://www.youtube.com/watch?v=hjR-ZveXBpQ