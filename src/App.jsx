import React, { Component } from "react";
import Litwizlogo from "./components/logo";
import Litwiztitle from "./components/logotitle"
import Navbar from "./components/navbar"
import Bodyframe from "./components/bodyframe"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Litwizlogo />
        <Litwiztitle />
        <Bodyframe />
      </div>
    );
  }
}

export default App;
