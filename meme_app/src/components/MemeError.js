import React from 'react';
import '../styles/MemeError.css'

// stateless function that displays error when wrong input information is given
export default function erro(props) {
    return (
        <div >
          <h1 className="meme-error-message">{props.message}</h1>
        </div>
    )
}
