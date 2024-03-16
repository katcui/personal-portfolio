import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reacticon from "../assets/img/react-icon.png";
import nodeicon from "../assets/img/nodejs-icon.png";
import firebaseicon from "../assets/img/firebase-icon.png";
import expoicon from "../assets/img/expo-icon.png";
import awsrdsicon from "../assets/img/aws-rds-icon.png";
import awsamplifyicon from "../assets/img/aws-amplify-icon.png";
import awslambdaicon from "../assets/img/aws-lambda-icon.png";
import awsapiicon from "../assets/img/aws-api-gateway-icon.png";
import tailwindcssicon from "../assets/img/tailwind-css-icon.png";
import linuxicon from "../assets/img/linux-icon.png";
import supabaseicon from "../assets/img/supabase-icon.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Technologies = () => {
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
        <section className="tech" id="techs">
            <TrackVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="tech-bx">
                                        <h2>
                                            Technologies
                                        </h2>
                                        <p>These are frameworks, libraries, and other technologies that I've use in projects and coursework.</p>
                                        <Carousel responsive={responsive} infinite={true} className="tech-slider">
                                            <div className="item">
                                                <img src={reacticon} alt="Image" />
                                                <h5>React.JS</h5>
                                            </div>
                                            <div className="item">
                                                <img src={reacticon} alt="Image" />
                                                <h5>React.Native</h5>
                                            </div>
                                            <div className="item">
                                                <img src={nodeicon} alt="Image" />
                                                <h5>Node.JS</h5>
                                            </div>
                                            <div className="item">
                                                <img src={firebaseicon} alt="Image" />
                                                <h5>Firebase</h5>
                                            </div>
                                            <div className="item">
                                                <img src={expoicon} alt="Image" />
                                                <h5>Expo</h5>
                                            </div>
                                            <div className="item">
                                                <img src={awsrdsicon} alt="Image" />
                                                <h5>AWS RDS</h5>
                                            </div>
                                            <div className="item">
                                                <img src={awsamplifyicon} alt="Image" />
                                                <h5>AWS Amplify</h5>
                                            </div>
                                            <div className="item">
                                                <img src={awslambdaicon} alt="Image" />
                                                <h5>AWS Lambda</h5>
                                            </div>
                                            <div className="item">
                                                <img src={awsapiicon} alt="Image" />
                                                <h5>AWS API Gateway</h5>
                                            </div>
                                            <div className="item">
                                                <img src={tailwindcssicon} alt="Image" />
                                                <h5>Tailwind CSS</h5>
                                            </div>
                                            <div className="item">
                                                <img src={linuxicon} alt="Image" />
                                                <h5>Linux</h5>
                                            </div>
                                            <div className="item">
                                                <img src={supabaseicon} alt="Image" />
                                                <h5>Supabase</h5>
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