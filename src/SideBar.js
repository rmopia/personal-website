import React, { Component } from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";
import "./SideBar.css"

const content = <div>
    <div className="block-col-top">
        <Link className="link-sidebar" to="/">ARCHIVE</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robert-mopia/" className="link-sidebar">LINKEDIN</a>
    </div>
    <div className="block-col-bottom">
        <Link className="link-sidebar" to="/about">ABOUT ME</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rmopia" className="link-sidebar">GITHUB</a>
    </div>
    <div>
        <p className="my-name">ROBERT MOPIA</p>
        <p className="my-role">JR FULLSTACK DEV</p>
    </div>
    <div className="footer-container">
        <small className="name-footer">
            copyright &copy; {new Date().getFullYear()}
        </small>
    </div>
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