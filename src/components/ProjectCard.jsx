/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const containerClassName = `proj-imgbx rounded heartbeat`;
  return (
    <Col size={12} sm={6} md={4}>
      <div className={containerClassName} rel="noreferrer">
        <a target="_blank" href={link} rel="noreferrer">
          <img src={imgUrl} className="img-fluid rounded" alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}
