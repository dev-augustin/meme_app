import React, { Component } from 'react';
import "How"
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

    handleChange(){

    }
    
    onSubmit(){

    }
    render() {
        return (
            <div>
               <form>
                  <label>username</label>
                  <input type = "text" name="username" value={this.state.username} onChange={this.handleChange}/>
                  <label>username</label>
                  <input type = "password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  <label>template_id</label>
                  <input type = "text" name="template_id" value={this.state.template_id} onChange={this.handleChange}/>
                  <label>username</label>
                  <input type = "text" name="text0" value={this.state.text0} onChange={this.handleChange}/>
                  <label>username</label>
                  <input type = "text" name="text1" value={this.state.text1} onChange={this.handleChange}/>
                  <button onClick={this.onSubmit}>Submit</button>
                </form> 
               
            </div>
        )
    }
}

