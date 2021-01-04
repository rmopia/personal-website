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

class Home extends Component{
    constructor(props){
        super(props);
      }
    
      render(){
        const opts = {
            height: '240',
            width: '440',
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
                    <Col xs={12} md={12}>
                        <GitHubCalendar
                        username="rmopia"
                        fontSize={16}
                        blockSize={14}
                        >
                            <ReactTooltip delayShow={50} html />
                        </GitHubCalendar>
                    </Col>
                </Row>
                <Row className="home-row-2">
                    <Col xs={6} md={10}>
                        <div>PERSONAL WEBSITE</div>
                        <Link to="/" style={{display:"block"}} className="site-link">ROBERTMOPIA.COM</Link>
                        <small>DECEMBER 2020 - ONGOING</small>
                        <p>REACT, NODE.JS</p>
                    </Col>
                </Row>
                <hr/>
                <Row className="home-row-3">
                    <Col xs={6} md={7}>
                        <div>MATHLY APPLICATION</div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robert-mopia/" style={{display:"block"}} className='mathly-link'>APP.MATHLY.IO</a>
                        <small>MAY 2020 - ONGOING</small>
                        <p>JR FULLSTACK DEVELOPER, SCRUM MASTER</p>
                        <p>AWS TECHNOLOGIES UTILIZED: AWS RDS, LAMBDA, API GATEWAY, COGNITO</p>
                        <p>BACK-END: Blueprinted schemas and created SQL database for user data, Created C# Web Api that handles all user data between React app to RDS SQL DB, Node.js algorithms to determine </p>
                        <p>FRONT-END: REACT, CSS, BOOTSTRAP, REACT-BOOTSTRAP</p>
                    </Col>
                    <Col xs={6} md={5}>
                        <YouTube videoId="-ku17UvK0Pw" opts={opts} onReady={this._onReady} className="mathly-youtube"/>
                    </Col>
                </Row>
            </Container>
          </div>
        )
      }
}
export default Home;