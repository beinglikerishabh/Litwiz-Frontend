import React, { Component } from "react";
import "../App.css";
import Subgroupshortdesc from "./subgroupshortdesc";
import Subgrouphead from "./subgrouphead";
import Subgroupbutton from "./subgroupbutton";
// import App1 from "./popup";
class Subgroupdesc extends Component {
  render() {
    return (
      <div className="subgroupdesc">
        <Subgrouphead />
        <Subgroupshortdesc />
        <Subgroupbutton/>

      </div>
    );
  }
}

export default Subgroupdesc;
