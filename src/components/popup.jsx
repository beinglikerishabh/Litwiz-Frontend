import React, { Component } from "react";
import "../App.css";
class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div>
        <div className="popup">
            <h1 className="popupheading">Heading</h1>
          <p className="longdesc">I'm A Pop Up!!!</p>
          <button className="closebutton" onClick={this.handleClick}>
            close
          </button>
        </div>
      </div>
    );
  }
}
export default PopUp;
