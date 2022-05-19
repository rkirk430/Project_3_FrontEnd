import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const Sandbox = (props) => {
    return (
        <div className="SandboxNav">
            <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Sentiment Trader</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <NavDropdown title="Alternative Datasets" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/price">Stock Pricing</NavDropdown.Item>
                        <NavDropdown.Item href="/sentiment">Reddit Sentiment</NavDropdown.Item>
                        <NavDropdown.Item href="/government">Congress Trading Activity</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>
        </div>
    );
};

export default Sandbox;
