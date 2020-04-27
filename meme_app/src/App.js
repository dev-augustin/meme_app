import React from 'react';
import './App.css';
import Home from './components/Home';
import heading from './Assets/chuttersnap-unsplash.jpg'

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
      <div className="heading-container">
          {/* <img className='center-pic' src={centerImage} alt = "" /> */}
          <h2 className="main-page-heading"> Meme Generator</h2>
        </div>
        <div className="image-container">
          <img className='main-pic-heading' src={heading} alt = "" />
        </div>
        </div>
      
        <div className="router-links-container">
          <Home/>
        </div>
    </React.Fragment>
  );
}

export default App;


// Reference Material: Below video helped to learn about rendering React-App as multi-page app using React-Router
// https://www.youtube.com/watch?v=hjR-ZveXBpQ
// Image source: https://unsplash.com/