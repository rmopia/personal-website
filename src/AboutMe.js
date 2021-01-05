import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./AboutMe.css"
import hiking from "./resources/hiking.jpg";
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const TITLE = 'Robert Mopia'
const text_one = 'Disciplined fullstack developer with a focus in back-end development such as Node.js functionality and algorithms that correspond to React applications.'
const text_two = "Recently graduated with a Bachelor's in Computer Science and a 3.6 GPA from San Diego State University as of May 2020." 
const text_three = "Currently building and maintaining back-end functions, applying front-end design and utilizing AWS cloud services under Mathly Inc."

export default class AboutMe extends Component{
    constructor(props) {
        super(props);
        this.state = {
          emailToCopy: "robert.mopia@gmail.com",
          phoneToCopy: "6199488319",
          emailCopied: false,
          phoneCopied: false,
        };
     
    }
    render(){
        const { phoneToCopy, emailToCopy } = this.state;
        return(<div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Container className="about-me-container">
                <Row className="row-1">
                    <Col xs={3} md={6}>
                        <div className="portfolio-cont">
                            <Image src={hiking} className="portfolio-img" responsive rounded alt="myself"></Image>
                            <div className="portfolio-middle">
                                <div className="portfolio-text">Potato Chip Rock, 7/20/2020</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} md={6} className="about-me-col">
                        <div className="about-me-1">{text_one}</div>
                        <div className="about-me-1">{text_two}</div>
                        <div className="about-me-1">{text_three}</div>
                    </Col>
                </Row>
                <Row className="row-2">
                    <Col xs={6} md={6} className="phone-num-col">
                        <Button className="my-phone-num" onClick={() => {navigator.clipboard.writeText(phoneToCopy)}} variant="link">(619) 948-8319</Button>
                    </Col>
                    <Col xs={6} md={6} className="email-col">
                        <Button className="my-email" onClick={() => {navigator.clipboard.writeText(emailToCopy)}} variant="link">robert.mopia@gmail.com</Button>
                    </Col>
                </Row>
            </Container>
        </div>)
    }
}
