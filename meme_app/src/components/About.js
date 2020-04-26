import React from 'react';
import '../styles/About.css';

// stateless function that displays introduction about Meme generator API
export default function About() {
    return (
        <div className="about-meme-app">
            <p>Meme Generator App is built using Img API.</p> 
            <p>The Imgflip API uses a RESTful JSON interface</p>
            <h3>get_memes</h3>    
            <p>URL: https://api.imgflip.com/get_memes &nbsp;&nbsp; Method: GET</p>
            <h3>caption_img</h3>
            <p>URL:https://api.imgflip.com/caption_image &nbsp;&nbsp; Method: POST</p>
            <p><strong>Source:</strong>https://api.imgflip.com </p>
        </div>
    )
}
