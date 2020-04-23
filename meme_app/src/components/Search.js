// This will be a stateful component 
import React, { Component } from 'react';
import axios from "axios";
import SearchResult from './SearchResult'

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: '',
            searchResult: "",
            name:"",
            url:"",
            error: ""
        }
        //this.handleChange=
    }
    

    //API Call uisng Axios and Async Await
    // componentDidMount(){
    //     this.searchRequest();
    // }
    // async searchRequest(){
    //      // fetching all memes
        //console.log("API: ", this.state.searchValue)
        searchRequest = async () => {
        const submitValue = this.state.searchValue;
        console.log("Hello", submitValue)
        const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes/");
        console.log("responsedaata : ", response.data)
        console.log("response.data.data: ", response.data.data);
        //console.log(response.data.data.memes)
        const results=response.data.data.memes;
        console.log("Results: ", results); //displays all memes
       // console.log(this.state.searchValue)
        const searchRequest = results.filter(memeFilter => memeFilter.name.toLowerCase().includes(this.state.searchValue))
        console.log(searchRequest);
        if (searchRequest!=null)
        {
            this.setState({searchResult :searchRequest})
        }else{
            this.setState({error: "No results"})
        }
    }

    //receiving the value entered in text field to search
    handleChange = (event) =>{
        event.preventDefault();
        console.log(event.target.value)
        this.setState({searchValue :event.target.value})
    }
     

    // function to handle search
    onSearch = (event) =>{
        event.preventDefault();
        console.log(this.state.searchValue);
        this.searchRequest();
    }
    render() 
    {
       
        // console.log(results);
        return (
              <React.Fragment>

                  
          
                <form>
                    <input type="text" name="Search" value={this.state.searchValue} placeholder="Search" onChange={this.handleChange}/>
                    <button onClick={this.onSearch}>Search</button>
                </form>

                  {/* { this.state.searchResult ? (
                     <div> */}
                       {this.state.searchResult.map((memeResult) => (
                    <div> 
                        <h1>{memeResult.name}</h1>
                     <img src={memeResult.url} alt="memes"/> </div>))}
            {/* //       ))} </div> */}
            {/* //       ) :
            //     (<p>Try</p>)
            // } */}

                </React.Fragment>

               
            //     { this.state.searchResult ? ()
            //          <div>
            //            {this.state.searchResult.map((memeResult) => (
            //         <div> 
            //             <h1>{memeResult.name}</h1>
            //          <img src={memeResult.url} alt="memes"/> </div>
            //       ))} </div>
            //       ) :
            //     (<p>Try</p>)
            // }

                //  Need to pass the fetched results to display in child component
                // <SearchResults />
        
             


        //      <form>
        //      <input type="text" name="Search" value={this.state.searchValue} placeholder="Search" onChange={this.handleChange}/>
        //      <button onClick={this.onSearch}>Search</button>
        //      <button onClick={this.onSearch}> Search <button/> 
        //   </form> 
                //  displays all memes 
                //   {this.state.searchResult.map((memeResult) => (
                //      <div> 
                //          <h1>{memeResult.name}</h1>
                //      <img src={memeResult.url} alt="memes"/> </div>
                //  ))
                 //} 
        
        );
    }
}

