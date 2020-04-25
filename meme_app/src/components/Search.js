// This will be a stateful component 
import React, { Component } from 'react';
import axios from "axios";
import SearchResult from './SearchResult'
import ErrorMessage from './ErrorMessage';
import '../styles/Search.css';
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
             searchValue: '',
             searchResult: [],
             name:"",
             url:"",
             error: "",
             noData: "",
             message: "nodata",
             resultName: "",
             resultUrl: ""
         }
     }
    
        searchRequest = async () => {
            try{

                const submitValue = this.state.searchValue;
                //  console.log("Hello", submitValue)
                const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes/");
                // console.log("responsedaata : ", response.data)
                // console.log("response.data.data: ", response.data.data);
                //console.log(response.data.data.memes)
                 const results=response.data.data.memes;
                //  console.log("Results: ", results); //displays all memes
                // console.log(this.state.searchValue)
                 const searchRequest = results.filter(memeFilter => memeFilter.name.toLowerCase().includes(this.state.searchValue));
                //  console.log(searchRequest);
                //  const fitlerResult=searchRequest.map((memeResult) => (<div>{memeResult.resultName}{memeResult.resultUrl}</div>))
                //  console.log(fitlerResult)
                if(searchRequest.length>0){
                 this.setState({searchResult :searchRequest});
                 this.setState({noData: false})
                }
                else{
                    // const message = "No data found";
                    this.setState({noData :true})
                }
            }
            catch(e){
                const error= e;
                // console.log("ErrorCatch", error.response);
            }
     }

    //receiving the value entered in text field to search
    handleChange = (event) =>{
        event.preventDefault();
        // console.log(event.target.value)
        this.setState({searchValue :event.target.value})
    }
     
    // function to handle search
    onSearch = (event) =>{
        event.preventDefault();
        // console.log(this.state.searchValue);
        this.searchRequest();
    }
    render() {
          let res=this.state.searchResult;
        return (
          
            <React.Fragment>
            <div>          
                <form className='form-container'>
                    <input className="search-input" type="text" name="Search" value={this.state.searchValue.toLowerCase()} placeholder="enter search text" onChange={this.handleChange}/>
                    <button id="#search-button" onClick={this.onSearch}>Search</button>
                </form>
            </div>
              {
                this.state.noData ? <ErrorMessage/> :
                res.map((memeResult, index) => {
                return (
                <SearchResult key={index} name={memeResult.name} url={memeResult.url} />)}) 
              }
            </React.Fragment>
        
        )
    }
}

// Reference: Below article helped to learn how to display search results
// https://medium.com/@prezshaikh/build-a-food-listing-app-with-reactjs-d1471d9ef866
// https://medium.com/@reneecruz/search-bar-in-react-js-in-six-simple-steps-4849118b2134
// Display data from API with react
// https://www.digitalocean.com/community/tutorials/how-to-display-data-from-the-digitalocean-api-with-react