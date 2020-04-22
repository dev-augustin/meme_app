// This will be a stateful component 
import React, { Component } from 'react';
import axios from "axios";
// import Se

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: '',
            searchResult: [],
            name:"",
            url:""
        }
    }
    

    //API Call uisng Axios and Async Await
    componentDidMount(){
        this.searchRequest();
    }
    async searchRequest(){
        const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes/");
        // const result = response.data.memes;
        // console.log(result)
        // console.log(response);
        // const resData=[];
        // resData.push(response.data);
        // console.log(resData[0].data);
        // //console.log(resData[0].data[0]);//doesnt work
        // console.log(resData[0].data.memes);
        // console.log(resData[0].data.memes[0].name);
        // //console.log(response.data);
        // const result=resData[0].data.memes.map(searchResult  => 
        //     <h1>{searchResult.memes[1]} </h1>
        // )
        // console.log(result)
        console.log(response.data.data);
        console.log(response.data.data.memes)
        const results=response.data.data.memes;
        this.setState({searchResult :results})
    }

    //receiving the value entered in text field to search
    // handleChange = (event) =>{
    //     // event.preventdefault();
    //     this.setState({searchValue :event.target.value})
    // }
     

    // function to handle search
    // onSearch = () =>{
    //     this.searchRequest(this.state.searchValue);
    // }
    render() {
        return (
            <div>
                {/* <form>
                    <input type="text" name="Search" value={this.state.searchValue} placeholder="Search" onChange={this.handleChange}/>
                    <button onClick={this.onSearch}>Search</button>
                    {/* <button onClick={this.onSearch}> Search <button/> */}
                 {/* </form> */} 
                 {this.state.searchResult.map((memeResult) => (
                     <div> 
                         <h1>{memeResult.name}</h1>
                     <img src={memeResult.url} alt="memes"/> </div>
                 ))
                }
            </div>
        )
    }
}

