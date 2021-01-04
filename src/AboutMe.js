import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./AboutMe.css"
import boy from "./resources/boy.jpg";
import Button from 'react-bootstrap/Button'

const TITLE = 'About Me'
const text_one = 'Disciplined fullstack developer with a focus in back-end work such as node.js functionality and complex algorithms that correspond to react applications.'
const text_two = "Recently a college graduate with a bachelor's in Computer Science from San Diego State University as of May 2020." 

export default class AboutMe extends Component{
    constructor(props) {
        super(props);
        this.state = {
          textToCopy: "robert.mopia@gmail.com"
        };
     
    }
    render(){
        return(<div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Container className="about-me-container">
                <Row className="row-1">
                    <Col xs={6} md={6}>
                        <div className="portfolio-cont">
                            <img src={boy} className="portfolio-img" alt="myself"></img>
                            <div className="portfolio-middle">
                                <div className="portfolio-text">Robert</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={6} className="about-me-col">
                        <div className="about-me-1">{text_one}</div>
                        <div className="about-me-1">{text_two}</div>
                    </Col>
                </Row>
                <Row className="row-2">
                    <Col xs={6} md={6}>
                        <div className="my-phone-num">(619) 948-8319</div>
                    </Col>
                    <Col xs={6} md={6}>
                        <Button className="my-email" onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}} variant="link">robert.mopia@gmail.com</Button>
                    </Col>
                </Row>
            </Container>
        </div>)
    }
}
