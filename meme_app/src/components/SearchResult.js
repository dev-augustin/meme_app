import React from 'react';

export default function searchResult(props) {
    return (
        <div>
           
                    <div> 
                        <h1>{props.name}</h1>
                     <img src={props.url} alt="memes"/> </div>
                    
        </div>
    )
}
