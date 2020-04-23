import React, { Component } from 'react';
import HowTo from "./HowTo"
import axios from 'axios';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const userName=process.env.REACT_APP_USERNAME;
const password=process.env.REACT_APP_PASSWORD;
console.log(userName)
export default class GenerateMeme extends Component {
    constructor(props){
        super(props);
        this.state={
            username: " ",
            password: "",
            template_id:"",
            text0:"",
            text1: ""
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
            text0: this.state.picture,
            text1: this.state.text1
        };
        console.log("memeData: ", memeData);
        //console.log("username: ", userName);
        this.postAPI(memeData);
    }

    // async postAPI(memeData){
    //     console.log("PostAPI: ", memeData);
    //     const response = await axios.post("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image", memeData);
    //     console.log(response);
    //     console.log(response.error)
    // }

    postAPI = (memeData) => {
        console.log("PostAPI: ", memeData);
        fetch("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image",{
            method: "POST",
            headers: {
                'Content-type' : 'mutipart-form'
            },
            body: memeData
    }).then (function (res){ 
            //  let memeInfo= JSON.stringify(res);
             if(res.ok) {
                 alert("perfect");
                console.log(res);
                //  console.log(res.data.data)
             }else if (res.statusCode === 401){
                 alert("oops");
             }
    }, function (e){
           alert("error form")         
    })
        
                    
}      
       
    render() {
        return (
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
               <HowTo/>
            </div>
        )
    }
}

