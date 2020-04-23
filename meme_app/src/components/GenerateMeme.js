import React, { Component } from 'react';
import HowTo from "./HowTo"
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
    
    onSubmit(){

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

