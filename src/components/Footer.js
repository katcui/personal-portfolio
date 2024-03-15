import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/cat-logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/kathycui04/"><img src={navIcon1}/></a>
                            <a href="https://github.com/katcui"><img src={navIcon2}/></a>
                        </div>
                        <p>CopyRight 2024. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}