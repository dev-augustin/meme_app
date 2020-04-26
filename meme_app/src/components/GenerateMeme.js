import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs'; //queryString installed to convert JS object into multipart/form-data
import MemeResult from "./MemeResult";
import MemeError from './MemeError';
import '../styles/GenerateMemes.css';

export default class GenerateMeme extends Component {
    constructor(props){
        super(props);
        this.state={
            username: " ",
            password: "",
            template_id:"",
            text0:"",
            text1: "",
            resultURL:null,
            info: "",
            noData: "",
            success: null
        }
    }
    
    handleChange = (event) => {
       event.preventDefault();
       this.setState({[event.target.name] :event.target.value})
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        let memeData={
            template_id : this.state.template_id,
            username : this.state.username,
            password : this.state.password,
            text0: this.state.text0,
            text1: this.state.text1
        };
   
        this.postAPI(memeData);
        // this.setState({info: "Error"})
    }

    // API params should be sent as HTTP parameters and not as JSON. In insomnia- POST request was succesful when data was sent as content-type: multipart form data;
    // References which gave an idea to install and use "qs" to convert the form data:
    // 1. https://stackoverflow.com/questions/52032202/r-interface-to-imgflip-api-https-api-imgflip-com-always-ends-in-with-the-f
    // 2. https://stackoverflow.com/questions/22783108/convert-js-object-to-form-data
    
    postAPI = async (memeData) =>{
        try{

            const data = qs.stringify(memeData);
            const response= await axios.post("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image", data);
            const errorMessage = response.data.error_message;
            const why=JSON.stringify(errorMessage);
            console.log(why);
            this.setState({info:why});
            // console.log("ErrorMessage",errorMessage) ;//error message displayed
            const resultURL=response.data.data.url;   // captioned meme url sent back as response to HTTP POST Request       
            // this.setState({info:why});
            // this.setState({success: false})
            this.setState({resultURL :resultURL});
    }
        catch(error){
            // console.log(error.message)
        }
    }
      
    render() {
        // let resultData =this.state.info;
        let res=this.state;
        return (
            <React.Fragment>
            <div className="how-to">  
               <p>  
                <strong>Input Parameters</strong>
                <strong>template_id:</strong> returned by the get_memes response <br/>
                <strong> username, password:</strong> username of a valid imgflip account.<br/>
                <strong>text0:</strong> Top text for the meme &nbsp;&nbsp;
                <strong> text1:</strong> Top text for the meme 
                <a href="https://api.imgflip.com/popular_meme_ids" target="_blank" alt="template-ids"> Link :template_id for meme images</a>
              </p>
            </div>

            <div>
               <form className="generate-meme">
                  <label className="generate-meme-label">User Name
                  <input className="generate-meme" type = "text" name="username" value={this.state.username} onChange={this.handleChange}/></label>
                  <label className="generate-meme-label">Password</label>
                  <input className="generate-meme" type = "password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  <label className="generate-meme-label">Template_ID</label>
                  <input className="generate-meme" type = "text" name="template_id" value={this.state.template_id} onChange={this.handleChange}/>
                  <label className="generate-meme-label">Text0</label>
                  <input className="generate-meme" type = "text" name="text0" value={this.state.text0} onChange={this.handleChange}/>
                  <label className="generate-meme-label">Text1</label>
                  <input className="generate-meme" type = "text" name="text1" value={this.state.text1} onChange={this.handleChange}/>
                  <button id="submit-button" onClick={this.onSubmit}>Generate</button>
                </form> 
            </div>
                {this.state.info && <MemeError message={this.state.info}/>}
                {res.resultURL!==null && <MemeResult url={res.resultURL} /> }
  </React.Fragment>
          
        )
    }
}

