import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/recat.png";
import projImg2 from "../assets/img/disc-eas.png";
import projImg3 from "../assets/img/breast-tumor-classifier.png";
import projImg4 from "../assets/img/osm-nav.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects1  = [
        {
            title: "ReCat Mobile App",
            skills: "React.Native | Expo | Firebase",
            description: "Mobile app for both iOS and android to help partners communicate and express love and appreciation.",
            imgUrl: projImg1,
            linkUrl: "https://github.com/ReCatappteam/ReCatDev",
        },
        {
            title: "Evanston Animal Shelter Inventory Manager",
            skills: "React.JS | AWS RDS | MySQL",
            description: "Webapp built for local animal shelter for automated inventory updating and tracking.",
            imgUrl: projImg2,
            linkUrl: "https://github.com/lkulkarni137/DISC-EAS-2024",
        },
    ];
    const projects2  = [
        {
            title: "Breast Tumor Classifier",
            skills: "Python | Data Pre-processing | ML Algorithms",
            description: "Machine Learning model which classifies breast tumors as benign or malignant based on physical attributes.",
            imgUrl: projImg3,
            linkUrl: "https://katcui-breast-cancer-tumor-classifier-diagnosis-webapp-q5y3zt.streamlit.app/",
        },
    ];
    const projects3  = [
        {
            title: "Open-Street Map Navigator",
            skills: "C/C++ | Data Structures | Dijkstra's",
            description: "Open Street Map navigation tool that provides building information and directions for navigating.",
            imgUrl: projImg4,
            linkUrl: "https://github.com/katcui/navigate-northwestern",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                                <h2>Projects</h2>
                                <p>These are a few projects I've worked on for clients, startups, student organizations, courses, and personal use that have developed different skills in web and mobile development, AI/ML, and database management.</p>
                            </div> }
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Business</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Personal</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Academic</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content >
                                <Tab.Pane eventKey="first">
                                    <Row className="project-tabs mb-5 justify-content-center align-items-center">
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className="project-tabs mb-5 justify-content-center align-items-center">
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className="project-tabs mb-5 justify-content-center align-items-center">
                                        {
                                            projects3.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )  
}