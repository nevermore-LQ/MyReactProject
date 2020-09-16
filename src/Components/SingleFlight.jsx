import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../Context";
import { Container, Row, Col } from "react-bootstrap";
import Book from "./Book";

const SingleFlight = () => {
  const { flightInfo } = useContext(MyContext);

  let { slug } = useParams();
  const currentStar = flightInfo.find((item) => item.name === slug);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img
          src={`/images/stars/${currentStar.name}.jpg`}
          style={{ width: "30%", margin: "3rem", textAlign: "center" }}
          alt={`${currentStar.name}`}
        />
      </div>
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <div>
              <h2 style={{ textAlign: "center" }}>{currentStar.name}</h2>
              <p style={{ textAlign: "initial" }}>{currentStar.description}</p>
              <br />
              <span>
                <b>Transportation Available: &nbsp;&nbsp;&nbsp;</b>
              </span>
              <img
                src="/images/spaceship.png"
                title="spaceship"
                alt="spaceship"
                style={{
                  display: currentStar.spaceship ? "inline" : "none",
                  width: "30px",
                }}
              />
              <img
                src="/images/broomstick.png"
                title="broomstick"
                alt="broomstick"
                style={{
                  display: currentStar.broomstick ? "inline" : "none",
                  width: "30px",
                }}
              />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <Book
              desName={currentStar.name}
              price={currentStar.price}
              spaceship={currentStar.spaceship}
              broomstick={currentStar.broomstick}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleFlight;
