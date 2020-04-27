import React from 'react';
import '../styles/HowTo.css'

// stateless function that displays instructions on how to create captions to meme
export default function HowTo() {
    return (
        <React.Fragment>
            <div className="how-to">
             <p><h3>Input Parameters</h3>
                <strong>template_id:</strong> <span className="text-color">click on template ID link </span><br/>
                <strong> username, password:</strong> <span className="text-color">username & password of a valid imgflip account</span><br/>
                <strong>text0:</strong> <span className="text-color">Top text for the meme </span>&nbsp;&nbsp;
                <strong> text1:</strong> <span className="text-color">botton text for the meme </span>
             </p>
            </div>
            <div className="important-note">
             <p><h3>IMPORTANT NOTE: </h3>
                If you plan to use the API for anything other than testing, you should create your own Imgflip account and use that instead of the default imgflip_hubot account, because that account may be limited as soon as you send a non-trivial number of requests, and then your script wouldn't be able to make memes anymore, and everyone would be sad.
             </p>
             <p><strong>Source: for further instructions</strong>https://api.imgflip.com </p>
             <p><a href="https://api.imgflip.com/popular_meme_ids" alt="template-ids"> Link :template_id for meme images</a></p>
            </div>
        </React.Fragment>
       
    )
}

