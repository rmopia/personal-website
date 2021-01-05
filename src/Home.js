import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from "react-tooltip"
import Container from 'react-bootstrap/Container'
import YouTube from 'react-youtube';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

import "./Home.css"
import { Row } from "react-bootstrap";

const TITLE = 'Robert Mopia'
const backendText = 
"BACK-END: Blueprinted schemas, created and maintained SQL database for user data, "+ 
"constructed Web Api, "+ 
"developed Node.js algorithms and functionalities to streamline the user experience."

const apiText = 
"Serverless C# API controller powered by AWS that handles all ingoing (React) and outgoing (AWS RDS) "+
"data pertaining to the Cognito user such as pictures submitted and homework problems."

class Home extends Component{
    constructor(props){
        super(props);
      }
    
      // onMouseOver={(e) => console.log(e.clientY - e.target.offsetTop)}
      render(){
        const opts = {
            height: '240',
            width: '420',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };
        return(
          <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Container className="home-container">
                <Row className="home-row-1">
                    <Col xs={12} md={12} className="gh-cal">
                        <GitHubCalendar
                        username="rmopia"
                        fontSize={15}
                        blockSize={12}
                        >
                            <ReactTooltip delayShow={50} html />
                        </GitHubCalendar>
                    </Col>
                </Row>
                <Row className="home-row-2">
                    <Col xs={6} md={10}>
                        <div className="project-header">PERSONAL WEBSITE</div>
                        <Link to="/" style={{display:"block"}} className="site-link">ROBERTMOPIA.COM</Link>
                        <small className="from-to">DECEMBER 2020 - ONGOING</small>
                        <p className="body-of-text">REACT, NODE.JS</p>
                    </Col>
                </Row>
                <hr/>
                <Row className="home-row-3">
                    <Col xs={7} md={7}>
                        <div className="project-header">MATHLY APPLICATION</div>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.mathly.io" style={{display:"block"}} className='mathly-link'>APP.MATHLY.IO</a>
                        <small className="from-to">MAY 2020 - ONGOING</small>
                        <div className="body-of-text">
                            <p>JR FULLSTACK DEVELOPER, SCRUM MASTER</p>
                            <p>AWS TECHNOLOGIES UTILIZED: AWS RDS, LAMBDA, API GATEWAY, COGNITO</p>
                            <p>{backendText}</p>
                            <p>FRONT-END: REACT, CSS, BOOTSTRAP, REACT-BOOTSTRAP</p>
                        </div>
                    </Col>
                    <Col xs={5} md={5}>
                        <YouTube videoId="-ku17UvK0Pw" opts={opts} onReady={this._onReady} className="mathly-youtube"/>
                    </Col>
                </Row>
                <hr/>
                <Row className="home-row-4">
                    <Col xs={6} md={6}>
                        <div className="project-header">MATHLY WEB API</div>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.mathly.io" style={{display:"block"}} className='mathly-link'>APP.MATHLY.IO</a>
                        <small className="from-to">JUNE 2020 - ONGOING</small>
                        <p className="body-of-text">{apiText}</p>
                    </Col>
                </Row>
                <hr/>
                <Row className="home-row-5">
                    <Col xs={12} md={12}>
                        <div className="project-header">MOVIE REVIEWING APP</div>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rmopia/php-mysql-review-website" style={{display:"block"}} className='mathly-link'>GITHUB</a>
                        <small className="from-to">DEC 2019 - JAN 2020</small>
                        <p className="body-of-text">PHP, HTML, MYSQL</p>
                    </Col>
                </Row>
            </Container>
          </div>
        )
      }
}
export default Home;