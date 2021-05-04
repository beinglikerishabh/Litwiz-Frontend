import React, { Component } from "react";
import "../App.css";
import Subgroupimg from "./subgroupimg"
import Subgroupdesc from "./subgroupdesc";
class Subgroup extends Component {
    
    render() { 
        return (
          <div className="subgroup">
            <Subgroupimg />
            <Subgroupdesc />
          </div>
        );
    }
}
export default Subgroup;