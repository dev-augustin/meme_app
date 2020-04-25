import React from 'react';
import '../styles/MemeResult.css';

export default function MemeResult(props) {
    return (
        <div  className="captioned-image">
            <img src={props.url} alt="memes" height="400px" width="400px"/>
        </div>
    )
}
