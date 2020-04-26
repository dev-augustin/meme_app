import React from 'react';
import '../styles/Home.css';
import Search from "./Search";
import GenerateMeme from './GenerateMeme';
import HowTo from './HowTo';
import About from './About';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

// Home function which has router links to all pages
export default function Home() {
    return (

        <div className="home-container">

       <Router>
       <nav>
           <ul className="lists-display">
           <li>  <Link to = '/'>Home </Link> </li>
               <li>
                  <Link to ='/Search'> Search</Link>
               </li>
               <li>
                   <Link to = '/GenerateMeme'>Create Captions for Meme</Link>
               </li>
               
               <li><Link to = '/HowTo'> Instructions to generate Meme</Link></li>
           </ul>   
        </nav>
          <Switch>
   
               <Route exact path="/Search"  component={Search}/>
               <Route path="/GenerateMeme" component={GenerateMeme}/>
               <Route path="/HowTo" component={HowTo} />
               <Route path="/" component={About} />  
          </Switch>
     
       </Router>
     
   </div>
   
    )
}
