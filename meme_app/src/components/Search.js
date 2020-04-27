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
            const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes/");
            const results=response.data.data.memes;
            //const searchRequest = results.filter(memeFilter => memeFilter.name.toLowerCase().includes(this.state.searchValue));
            // The below request filters the meme whose name includes the search text
            const searchRequest = results.filter(memeFilter => memeFilter.name.includes(this.state.searchValue));
            if(searchRequest.length>0){
                this.setState({searchResult :searchRequest});
                this.setState({noData: false})  // set to false when search result displays result for search value
            }
            else{
                this.setState({noData :true}) // set to true when search result does not return any results for search value
            }
        }
        catch(e){
            this.setState({hasError:e});
        }
     }

    //receiving the value entered in text field to search
    handleChange = (event) =>{
        event.preventDefault();
        // console.log(event.target.value)
        this.setState({searchValue :event.target.value})
    }
     
       // on click of search button and making a request to Axios get request to fetch results based on search
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
                    {/* <input className="search-input" type="text" name="Search" value={this.state.searchValue.charAt(0).toUpperCase()+ this.state.searchValue.slice(1)} placeholder="enter search text" onChange={this.handleChange}/> */}
                    <input className="search-input" type="text" name="Search" value={this.state.searchValue.charAt(0).toUpperCase()+ this.state.searchValue.slice(1) } placeholder="enter search text" onChange={this.handleChange}/>
                    {/* charAt(0).toUpperCase()+ this.state.searchValue.slice(1) - converts first letter of the word to UpperCase */}
                    {/* The name in ImgAPI has the first letter of word in UPPERCASE */}
                    {/* Resource https://www.tutorialrepublic.com/faq/how-to-make-the-first-letter-of-a-string-uppercase-in-javascript.php */}
                    <button id="search-button" onClick={this.onSearch}>Search</button>
                </form>
            </div>
            <div className="search-container">
             {/* If this.state.noData return true - display Error Message 
                else display the results*/}
             {
                this.state.noData ? <ErrorMessage/> :
                res.map((memeResult, index) => {
                return (
                <SearchResult key={index} name={memeResult.name} url={memeResult.url} />)}) 
              }
            </div>
            <div>
                {/* If catch block has an error, display that error */}
                {this.state.hasError &&  <h3>{this.state.hasError}</h3>}    
            </div>
            </React.Fragment>
        
        )
    }
}

// Reference: Below article helped to learn how to display search results 
// https://medium.com/@prezshaikh/build-a-food-listing-app-with-reactjs-d1471d9ef866
// https://medium.com/@reneecruz/search-bar-in-react-js-in-six-simple-steps-4849118b2134
// Display data from API with react
// https://www.digitalocean.com/community/tutorials/how-to-display-data-from-the-digitalocean-api-with-react