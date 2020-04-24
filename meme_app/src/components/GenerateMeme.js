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
            text0: this.state.text0,
            text1: this.state.text1
        };
        console.log("memeData: ", memeData);
        //console.log("username: ", userName);
        this.postAPI(memeData);
    }
//https://thoughts.amphibian.com/2015/07/make-memes-via-api-calls.html
   async postAPI(memeData){
       console.log("POSTAPI ", memeData)
    var request = require('request');
    request.post("https://api.imgflip.com/caption_image", {
        form : memeData
    }, function(error, response, body) {
     
        //var meme = JSON.parse(body);
     
        if (!error && response.statusCode === 200) {
            let result = JSON.parse(body) 
            //let resp=JSON.stringify(response);
              //console.log("meme: ",response.toJSON());
            console.log("Data:Body ",response.body);
            //console.log("S:Body ",response.body.success);
            console.log("resp: " , result.data.url)
            //console.log("DSt:Body ",resp.data.statusCode);
            //console.log("Bsta:Body ",resp.body.statusCode);
            console.log("Error: ", error)
        }
     
    });
   }
//         console.log("PostAPI: ", memeData);
//  await fetch.post("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image", memeData);
//         console.log(response);
//         console.log(response.error)
//     }

//     postAPI = (memeData) => {
//         console.log("PostAPI: ", memeData);
//         fetch("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image",{
//             method: "POST",
//             headers: {
//                 'Content-type' : 'mutipart/form-data'
//        //'Content-type' : 'application/json'
//             },
//             body: [memeData]
//     }).then (function (res){ 
//             //  let memeInfo= JSON.stringify(res);
//              if(res.ok) {
//                  alert("perfect");
//                 //console.log(JSON.stringify(res));
//                  console.log(res)
//              }else if (res.statusCode === 401){
//                  alert("oops");
//              }
//     }, function (e){
//            alert("error form")         
//     })
        
                    
// }      
       

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

