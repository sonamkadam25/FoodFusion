import React from "react";
import { Carousel, Form, Button } from "react-bootstrap";

// Ensure Bootstrap CSS and JS are imported once
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function CarouselComponent() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={`${process.env.PUBLIC_URL}/f2.jpg`}
          alt="First slide"
          style={{ filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Type in..."
              className="me-2 w-75 bg-white text-dark"
              aria-label="Search"
            />
            <Button variant="success" type="submit">
              Search
            </Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/f1.jpg`}
          alt="Second slide"
          style={{ filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Type in..."
              className="me-2 w-75 bg-white text-dark"
              aria-label="Search"
            />
            <Button variant="success" type="submit">
              Search
            </Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/f4.jpg`}
          alt="Third slide"
          style={{ filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Type in..."
              className="me-2 w-75 bg-white text-dark"
              aria-label="Search"
            />
            <Button variant="success" type="submit">
              Search
            </Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/f3.jpg`}
          alt="Third slide"
          style={{ filter: "brightness(60%)" }}
        />
        <Carousel.Caption>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Type in..."
              className="me-2 w-75 bg-white text-dark"
              aria-label="Search"
            />
            <Button variant="success" type="submit">
              Search
            </Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
