import React from 'react';
import '../styles/SearchResult.css'

// stateless function that displays search result
export default function searchResult(props) {
    return (
        <div className="search-result-container">
            <div className = "meme-search-result"> 
             <ul className="lists-display">
                 <li>
                      <h1 className="meme-title" > {props.name} </h1>
                      <img src={props.url} alt="memes" height="300px" width="400px"/>     
                 </li>
             </ul>
                
            </div>         
        </div>
    )
}
