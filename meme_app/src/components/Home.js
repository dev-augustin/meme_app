import React from 'react';
import './Home.css';
import Search from "./Search";
import CreateMeme from './CreateMeme'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default function Home() {
    return (
        <div>
             <h2>Welcome to Meme Generator</h2>

            <Router>
            <nav>
                <ul>
                    <li>
                       <Link to ='/Search'> Search</Link>
                    </li>
                    <li>
                        <Link to = '/CreateMeme'>Create Meme</Link>
                    </li>
                    <li>  <Link to = '/Home'> Go back to Home </Link> </li>
                </ul>
                
               
                <Route path="/Search" component={Search}/>
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
