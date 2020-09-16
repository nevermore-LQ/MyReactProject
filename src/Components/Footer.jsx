import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <footer style={{ padding: "50px 0 0 0 " }}>
        <Container fluid>
          <Row className="footer-row1" lg>
            <Col xs={12} md={4}>
              <h5 className="footer-title">Location</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, culpa!
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h5 className="footer-title">About</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                voluptatum tempora iure et consectetur unde!
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h5 className="footer-title">Contact</h5>
              <IconContext.Provider value={{ size: "1.75em" }}>
                <a
                  href="https://www.linkedin.com/in/li-qian-b73819150/"
                  className="footer-link"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:qianli528@gmail.com" className="footer-link">
                  <MdEmail />
                </a>
              </IconContext.Provider>
            </Col>
          </Row>
          <Row>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  backgroundColor: "#cdfff7",
                  textAlign: "center",
                  fontSize: "0.8em",
                  marginBottom: "0",
                }}
              >
                &copy; Copyright 2020, Unreal Corporation. All Rights Reserved.
              </p>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}
