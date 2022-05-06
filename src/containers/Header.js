import React from "react";
import DarkMode from "./DarkMode"
export default function ProductDetail() {



  return (
    <div className="ui menu fixed massive " style={{padding:"2px"}}>
          <div class="ui container" >
    <div className="item">
      <div className="ui icon input">
        FAKE SHOP
      </div>
    </div>
    <div className="right item">
    <DarkMode />
    </div>
  </div>
  </div>
  )
}
