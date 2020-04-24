import React from 'react'
import { BrowserRouter as Router, Link, Route , Switch} from "react-router-dom"
 import Home from "./Home";
import Search from './Search'
import '../styles/Header.css'
import GenerateMeme from './GenerateMeme'

export default function Header() {

    return (
        <div>
            <h2>Welcome To Meme </h2>
       
            {/* <h2>Welcome to Meme Generator</h2> */}
             {/* <Link to ='/Home'>PriyaHome</Link> */}
            <ul>
            <li>
                <Link to ='/Search' exact>Search</Link>
            </li>
            <li>
                <Link to ='/GenerateMeme'> Generator</Link>
            </li>
            </ul>
        {/* <Switch>

<Route exact path="/Search"  component={Search}/>
<Route path="/GenerateMeme" component={GenerateMeme}/>
<Route path="/Home" component={Home} />
</Switch> */}
       
        </div>
    )
}
