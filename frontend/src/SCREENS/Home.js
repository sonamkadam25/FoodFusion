import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Carousel, Form } from "react-bootstrap";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => { 
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await response.json();
      setFoodItem(data[0] || []);
      setFoodCat(data[1] || []);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* navbar end */}
      {/* carousel start */}
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src={`${process.env.PUBLIC_URL}/f2.jpg`}
              alt="First slide"
              style={{ filter: "brightness(60%)" }}
            />
            <Carousel.Caption>
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Type in..."
                  className="me-2 w-75 bg-white text-dark"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
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
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Type in..."
                  className="me-2 w-75 bg-white text-dark"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
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
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Type in..."
                  className="me-2 w-75 bg-white text-dark"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
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
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Type in..."
                  className="me-2 w-75 bg-white text-dark"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* carousel end */}

      {/* card below */}
      <div className="container">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div key={data._id} className="row mb-3">
                  <div className="fs-3 m-3">{data.CategoryName}</div>
                  <hr />
                  {foodItem.length > 0 ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={filterItems}
                              options={filterItems.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No such data</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
