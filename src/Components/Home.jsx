import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <h1 className="title">Unreal&trade; Intersteller Travel</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Spacetravel-1.jpg"
            alt="a"
          />
          <Carousel.Caption>
            <span className="caption">Pleasant Journey</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Spacetravel-2.jpg"
            alt="a"
          />
          <Carousel.Caption>
            <span className="caption">Set Off Now</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Spacetravel-3.jpg"
            alt="a"
          />
          <Carousel.Caption>
            <span className="caption">Highest Technology</span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="intro">
        <p>
          Unreal&trade; Intersteller Travel is a technological company that
          provides safe, fun and affordable travel services to the space. We aim
          to be the best company in the industry.
        </p>
      </div>
    </div>
  );
}
