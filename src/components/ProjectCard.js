import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, skills, description, imgUrl, linkUrl }) => {
    return (
        <Col sm={6} md={4}>
            <a href={linkUrl} style={{color: "white"}}>
                <div className="proj-imgbx">
                    <img src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <h6>{skills}</h6>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}