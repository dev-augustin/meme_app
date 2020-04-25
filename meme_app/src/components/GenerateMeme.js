import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs'; //queryString installed to convert JS object into multipart/form-data
import MemeResult from "./MemeResult";

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
            errorMessage: ""
        }
    }
    
    handleChange = (event) => {
       event.preventDefault();
       console.log(event.target.value)
       this.setState({[event.target.name] :event.target.value})
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username)
        let memeData={
            template_id : this.state.template_id,
            username : this.state.username,
            password : this.state.password,
            text0: this.state.text0,
            text1: this.state.text1
        };
        console.log("memeData: ", memeData);
        this.postAPI(memeData);
    }

    
    postAPI = async (memeData) =>{
         const data = qs.stringify(memeData);
        console.log("POSTAPI ", memeData);
        const response= await axios.post("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image", data);
        console.log(response)
    }
               
    render() {
        let resultdata =this.state.resultURL;
        return (
            <React.Fragment>
             <div>  
               <p><h3>Input Parameters</h3>
                <strong>template_id:</strong> returned by the get_memes response <br/>
                <strong> username, password:</strong> username of a valid imgflip account. <br/>for <strong>testing</strong> purpose, username: imgflip_hubot  <br/>
                <strong>text0:</strong> Top text for the meme &nbsp;&nbsp;
                <strong> text1:</strong> Top text for the meme 
             </p>
            </div>

             <div>
               <form>
                  <label>User Name</label>
                  <input type = "text" name="username" value={this.state.username} onChange={this.handleChange}/>
                  <label>Password</label>
                  <input type = "password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  <label>Template_ID</label>
                  <input type = "text" name="template_id" value={this.state.template_id} onChange={this.handleChange}/>
                  <label>Text0</label>
                  <input type = "text" name="text0" value={this.state.text0} onChange={this.handleChange}/>
                  <label>Text1</label>
                  <input type = "text" name="text1" value={this.state.text1} onChange={this.handleChange}/>
                  <button onClick={this.onSubmit}>Submit</button>
                </form> 
                 {/* <img src={this.state.resultURL} alt=""/> */}

                </div>  
                       {/* If HTTP post request is success, retrieve the meme img url and pass it to MemeResult child component to display */}
                     {resultdata!==null && <MemeResult url={this.state.resultURL} /> }
                <div>
                {/* <MemeResult url={this.state.resultURL} />  */}
                    </div> {/* {this.state.resultURL.map((memeResult) => <MemeResult url={memeResult.url} />)} */}
              </React.Fragment>
          
        )
    }
}

