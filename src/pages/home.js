import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Home = (props) => {
    return(
        <>
            <Container fluid>
                <Row className="homepage-header">
                    <Col sm={8}></Col>
                        <h4> Alternative Market Research for the Disruptive Economy. </h4>
                    <Col sm={4}></Col>
                         <h6> Quantstamp analyzes millions of datapoints to provide granular, actionable insights to underlying market sentiment </h6>
                </Row>
                <Row className="homepage-benefits-container">
                    <Col sm={4}></Col>
                        <h6> API Model Integration </h6>
                        <smaller> What does it mean? </smaller>
                    <Col sm={4}></Col>
                        <h6> Real Time Trade Alerts </h6>
                        <smaller> What does it mean? </smaller>
                    <Col sm={4}></Col>
                        <h6> Improving Risk-Adjusted Returns </h6>
                        <smaller> What does it mean? </smaller>
                </Row>
            </Container>
        </>

    ) 
};

export default Home;