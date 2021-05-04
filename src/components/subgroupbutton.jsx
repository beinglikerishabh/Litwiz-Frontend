import React, { Component } from "react";
import "../App.css";
import PopUp from "./popup";
class Subgroupbutton extends Component {
  state = {
    seen: false,
  };
  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  render() {
    return (
      <div>
        <div className="subgroupbutton" onClick={this.togglePop}>
          <button className="closebutton" onClick={this.popup}>try me</button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}
export default Subgroupbutton;
