import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pythonlogo from "../assets/img/python-icon.png";
import jslogo from "../assets/img/javascript-icon.png";
import clogo from "../assets/img/C++-logo.png";
import htmllogo from "../assets/img/html-logo.png";
import csslogo from "../assets/img/css-logo.png";
import tslogo from "../assets/img/typescript-logo.png";
import sqllogo from "../assets/img/sql-logo.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <TrackVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="skill-bx">
                                        <h2>
                                            Programming Languages
                                        </h2>
                                        <p>These are the programming languages I've used.</p>
                                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                            <div className="item">
                                                <img src={pythonlogo} alt="Image" />
                                                <h5>Python</h5>
                                            </div>
                                            <div className="item">
                                                <img src={jslogo} alt="Image" />
                                                <h5>Javascript</h5>
                                            </div>
                                            <div className="item">
                                                <img src={clogo} alt="Image" />
                                                <h5>C/C++</h5>
                                            </div>
                                            <div className="item">
                                                <img src={htmllogo} alt="Image" />
                                                <h5>HTML</h5>
                                            </div>
                                            <div className="item">
                                                <img src={csslogo} alt="Image" />
                                                <h5>CSS</h5>
                                            </div>
                                            <div className="item">
                                                <img src={tslogo} alt="Image" />
                                                <h5>Typescript</h5>
                                            </div>
                                            <div className="item">
                                                <img src={sqllogo} alt="Image" />
                                                <h5>SQL</h5>
                                            </div>
                                        </Carousel>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div> 
                }
            </TrackVisibility>
            <img className="background-image-left" src={colorSharp} />
      </section>
    )

}