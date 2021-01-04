import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from "react-tooltip"
import YouTube from 'react-youtube';
import "./Home.css"

const TITLE = 'Robert Mopia'

class Home extends Component{
    constructor(props){
        super(props);
      }
    
      render(){
        return(
          <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="calendar">
            <GitHubCalendar username="rmopia" fontSize={14} blockSize={14}>
            <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
            </div>
            <div>
                <p>personal website</p>
                <hr/>
                <p>mathly</p>
            </div>
          </div>
        )
      }
}
export default Home;