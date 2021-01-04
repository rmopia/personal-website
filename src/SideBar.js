import React, { Component } from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";
import "./SideBar.css"
import trainer from "./resources/trainer.gif"

var GifPlayer = require('react-gif-player');

const stuff = <div>
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
        <a target="_blank" rel="noopener noreferrer" href="https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgODwy46uCgw/view">
            <GifPlayer autoplay={true} gif={trainer} />
        </a>
        <small className="name-footer">
            copyright &copy; {new Date().getFullYear()} robert mopia
        </small>
    </div>
</div>

class SideBar extends Component{
    constructor(props) {
        super(props);
     
      }
     
      render() {
        return (
                <Sidebar
                shadow={false}
                sidebar={stuff}
                docked={true}
                pullRight={true}
            >
          </Sidebar>
        );
      }
}
export default SideBar;