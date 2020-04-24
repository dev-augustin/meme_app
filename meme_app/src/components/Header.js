import React from 'react'
import { Link } from "react-router-dom"
import Home from "./Home";
export default function Header() {

    return (
        <div>
             <h2>Welcome to Meme Generator</h2>

             <Link to ='/Home' >PriyaHome</Link>
        </div>
    )
}
