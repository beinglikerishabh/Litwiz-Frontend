import React, { Component } from "react";
import "../App.css";
import Subgroup from './subgroup'; 
class Group extends Component {
    render() { 
      //will iterate the using the iterator as data fetched from db
        return (
          <div className="group"> 
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            <Subgroup />
            
          </div>
        );
    }
}
 
export default Group