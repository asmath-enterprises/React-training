import React from "react";
import { Carousel } from "react-bootstrap";

const Blogcarousel = ({ title, content }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require("assets/images/landing1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{content}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={require("assets/images/landing2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="../../assets/images/landing3.jpg"
            src={require("assets/images/landing3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Blogcarousel;
