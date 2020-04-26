import React from 'react';
import '../styles/ErrorMessage.css'

// stateless function that displays error message when there is no search result
export default function ErrorMessage(props) {
    return (
        <div className="error-message">
         <h1>   No Result found </h1>
        </div>
    )
}
