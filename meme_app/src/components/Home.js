import React from 'react';
import '../styles/Home.css';
import Search from "./Search";
import GenerateMeme from './GenerateMeme'
import HowTo from './HowTo'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

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
                        <Link to = '/GenerateMeme'>Create Captions for Meme</Link>
                    </li>
                    <li>  <Link to = '/Home'> Go back to Home </Link> </li>
                    <li><Link to = '/HowTo'> How To <br/>(Instructions to geneate Meme)</Link></li>
                </ul>
                
               <Switch>

                    <Route exact path="/Search"  component={Search}/>
                    <Route path="/GenerateMeme" component={GenerateMeme}/>
                    <Route path="/HowTo" component={HowTo} />
               </Switch>
                
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
