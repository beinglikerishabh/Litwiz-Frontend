import React, { Component } from "react";
import "../App.css";
import Bgimage from "./bgimage";
import Group from "./group"

class Bodyframe extends Component {
  render() {
    return (
      <div className="bodyframe">
        <Bgimage />
        <Group />
      </div>
    );
  }
}

export default Bodyframe;
