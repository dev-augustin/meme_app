import React from 'react'
import { Link } from "react-router-dom"
// import Home from "./Home";
import '../styles/Header.css'

export default function Header() {

    return (
        <div>
             {/* <Link to ='/Home' >PriyaHome</Link> */}
            <ul>
            <li>
                <Link to ='/Search' >Search</Link>
            </li>
            <li>
                <Link to ='/GenerateMeme'> Generator</Link>
            </li>
            </ul>
        </div>
    )
}
