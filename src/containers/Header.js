import React from "react";
import DarkMode from "./DarkMode"
import { Link } from "react-router-dom";
export default function ProductDetail() {

  return (
    <nav className="ui menu fixed massive " style={{ padding: "2px" }}>
      <div class="ui container" >
        <a className="item ">
          <Link to="/" style={{color:"black"}}>FAKE SHOP</Link>
        </a>
        <div className="right item">
          <DarkMode />
        </div>
      </div>
    </nav>
  )
}
