// import React from 'react'

// export default function Search() {
//     return (
//         <div>
//             <form>
                
//                 <input type="text" name="Search" value="Search" placeholder="Search"/>
//             <input type="Submit" name="Search" value="Search" />
//             </form>
//         </div>
//     )
// }
// This will be a stateful component 
import React, { Component } from 'react';
import axios from "axios";

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: ''
        }
    }
    

    //API Call uisng Axios and Async Await
    componentDidMount(){
        this.searchRequest();
    }
    async searchRequest(){
        const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes/");
        console.log(response);
        const resData=[];
        resData.push(response.data);
        console.log(resData[0].data);
        //console.log(resData[0].data[0]);//doesnt work
        console.log(resData[0].data.memes);
        console.log(resData[0].data.memes[0].name);
        //console.log(response.data);
        const result=resData[0].data.memes.map(searchResult  => 
            <h1>{searchResult.memes[1]} </h1>
        )
        console.log(result)
    }

    //receiving the value entered in text field to search
    handleChange = (event) =>{
        // event.preventdefault();
        this.setState({searchValue :event.target.value})
    }
     

    // function to handle search
    // onSearch = () =>{
    //     this.searchRequest(this.state.searchValue);
    // }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="Search" value={this.state.searchValue} placeholder="Search" onChange={this.handleChange}/>
                    <button onClick={this.onSearch}>Search</button>
                    {/* <button onClick={this.onSearch}> Search <button/> */}
                 </form>
            </div>
        )
    }
}

