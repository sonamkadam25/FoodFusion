import React, { useEffect, useState } from "react";
// import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState(null);

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/api/auth/myOrderData", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      // Here we are sending the email in post to get history of that particular user
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      // Response of history we get, we are storing it on the setOrderData useState
      let response = await res.json();
      setOrderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  if (!orderData || !orderData.orderData) {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="m-5 w-100 h-100 text-center fs-3">Loading...</div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {/* Use reverse because the latest order we have to show first, in the database it is showing in the last so you have to use the reverse to show it at first */}
          {orderData.orderData.order_data.length !== 0
            ? orderData.orderData.order_data
                .slice(0)
                .reverse()
                .map((item, index) => {
                  return (
                    <div key={index} className="w-100">
                      {item[0]?.Order_date && (
                        <div className="w-100 text-center my-4">
                          <h5>Order Date: {item[0].Order_date}</h5>
                          <hr />
                        </div>
                      )}
                      <div className="d-flex flex-row flex-wrap">
                        {/* Here we are coming on the array data which is actually present in the database */}
                        {item.map((arrayData) => {
                          return (
                            <div key={arrayData._id} className="p-2">
                              {!arrayData.Order_date && (
                                <div
                                  className="card mt-3"
                                  style={{ width: "16rem", maxHeight: "360px" }}
                                >
                                  <img
                                    src={arrayData.img}
                                    className="card-img-top"
                                    alt="..."
                                    style={{
                                      height: "120px",
                                      objectFit: "fill",
                                    }}
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      {arrayData.name}
                                    </h5>
                                    <div
                                      className="container w-100 p-0"
                                      style={{ height: "38px" }}
                                    >
                                      <span className="m-1">
                                        {arrayData.qty}
                                      </span>
                                      <span className="m-1">
                                        {arrayData.size}
                                      </span>
                                      <div className="d-inline ms-2 h-100 w-20 fs-5">
                                        ₹{arrayData.price}/-
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
