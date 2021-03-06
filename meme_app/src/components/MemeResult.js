import React from 'react';
import '../styles/MemeResult.css';

// stateless function that displays captioned image
export default function MemeResult(props) {
    return (
        <div  className="captioned-image">
            <img src={props.url} alt="memes" height="300px" width="400px"/>
        </div>
    )
}
