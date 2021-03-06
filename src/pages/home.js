import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Home = (props) => {
    return(
        <>
            <Container fluid>
                <Row className="homepage-header">
                    <Col sm={8}></Col>
                        <h4> Alternative Market Research for the Disruptive Economy.2222... </h4>
                    <Col sm={4}></Col>
                         <h6> Quantstamp analyzes millions of datapoints to provide granular, actionable insights to underlying market sentiment </h6>
                </Row>
            </Container>
            <Container fluid>
                <Row className="homepage-benefits-container">
                    <Col sm={4}></Col>
                        <h6> API Model Integration </h6>
                        <h6> What does it mean? </h6>
                    <Col sm={4}></Col>
                        <h6> Real Time Trade Alerts </h6>
                        <h6> What does it mean? </h6>
                    <Col sm={4}></Col>
                        <h6> Improving Risk-Adjusted Returns </h6>
                        <h6> What does it mean? </h6>
                </Row>
            </Container>
        </>

    ) 
};

export default Home;