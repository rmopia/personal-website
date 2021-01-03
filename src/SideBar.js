import React, { Component } from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";
import "./SideBar.css"

const content = <div>
    <div className="block-col-top">
        <Link className="link-sidebar">ARCHIVE</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robert-mopia/" className="link-sidebar">LINKEDIN</a>
    </div>
    <div className="block-col-bottom">
        <Link className="link-sidebar">ABOUT ME</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rmopia" className="link-sidebar">GITHUB</a>
    </div>
    <div className="footer">Robert Mopia 2021</div>
</div>

class SideBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false
        };
     
      }
     
      render() {
        return (
          <Sidebar
            shadow={false}
            sidebar={content}
            docked={true}
            pullRight={true}
          >
          </Sidebar>
        );
      }
}
export default SideBar;