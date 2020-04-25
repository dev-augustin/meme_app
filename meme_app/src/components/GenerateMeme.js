import React, { Component } from 'react';
import HowTo from "./HowTo"
import axios from 'axios';
import qs from 'qs';
import { Link } from "react-router-dom";
//mport jsonformdata from 'json-form-data'//
import MemeResult from "./MemeResult"
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
        //console.log("username: ", userName);
        this.postAPI(memeData);
    }

    // postAPI = async (memeData) =>{
    //     console.log("POSTAPI ", memeData);
    //     const url = 'https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image';
    //     const options = {
    //         method : 'POST',
    //         // headers : {
    //         //     'Content-Type' : 'mutipart/form-data'
    //         // },
    //         form : memeData
    //     }
    //     fetch(url, options)
    //      .then((error) => {
    //          console.log(error);
    //          //console.log("Body: ", body)
    //         //  let result = JSON.parse(body)
    //         //  console.log(result)
    //      })
    //     };
       

    // postAPI = async (memeData) =>{
    //     console.log("POSTAPI ", memeData);
    //     const options = {
    //         headers : { 'Content-type' : 'mutipart/form-data'}
    //     };
    //     const response= await axios.post("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image", {memeData}, options);

    //     console.log(response)


    // }

     postAPI = async (memeData) =>{
         const data = qs.stringify(memeData);
        console.log("POSTAPI ", memeData);
        const response= await axios.post("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image", data);
        console.log(response)
    }

    // postAPI = async (memeData) =>{
    //     console.log("POSTAPI ", memeData);
    //     const response= await axios.post("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image", memeData);
    //     console.log(response)
    // }
//https://thoughts.amphibian.com/2015/07/make-memes-via-api-calls.html
//    async postAPI(memeData){
//        console.log("POSTAPI ", memeData)
//     var request = require('request');
//     request.post("https://api.imgflip.com/caption_image", {
//         form : memeData
//     }, function(error, response, body) {
//         let result = JSON.parse(body) 
//         let resultURL=result.data.url
//         if (!error && response.statusCode === 200) {
           
//             console.log("Data:Body ",response.body);    
//             console.log("resp: " , result.data.url)
//         //this.setState({resultURL: <MemeResult url={this.state.resultURL}/>})
//         this.setState({resultURL: resultURL})
//         }
//     }.bind(this));
//    }
// //         console.log("PostAPI: ", memeData);
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
//             form: memeData
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
        let resultdata =this.state.resultURL;
        return (
            <React.Fragment>
               
            <div>
                   <HowTo/>
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
        {resultdata!==null && <MemeResult url={this.state.resultURL} /> }
                <div>
                {/* <MemeResult url={this.state.resultURL} />  */}
                    </div> {/* {this.state.resultURL.map((memeResult) => <MemeResult url={memeResult.url} />)} */}
              </React.Fragment>
          
        )
    }
}

