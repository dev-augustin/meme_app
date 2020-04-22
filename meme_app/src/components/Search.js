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

    handleChange = (event) =>{
        event.preventdefault();
        this.setState({searchValue :event.target.value})
    }

    onSearch = () =>{
        
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="Search" value={this.state.searchValue} placeholder="Search" onChnage={this.handleChange}/>
                    <input type="Submit" name="Search" value="Search" onClick={this.onSearch}/>
                 </form>
            </div>
        )
    }
}

