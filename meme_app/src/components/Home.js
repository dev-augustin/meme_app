import React from 'react';
import './Home.css';
import Search from "./Search";
import CreateMeme from './CreateMeme'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Router>
            <nav>
                <h3>Welcome to Meme Generator</h3>
                <Route path="/" component={Search}/>
                <Route path="/CreateMeme" component={CreateMeme}/>
             </nav>
            </Router>
        </div>
     //     <div>
    //         <React.Fragment>
    // <div className="App">
    //   <h1>Welcome to Meme Generator</h1>
    // </div>
    // <div>
    //   <button onClick={<Search/>}>Search</button>
    //   <button>Create Meme</button>
    // </div>
    // </React.Fragment>
    //     </div> 


    )
}
