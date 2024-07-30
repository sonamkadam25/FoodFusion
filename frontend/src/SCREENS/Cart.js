import React from "react";
import { Trash } from 'lucide-react';
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
 
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3 text-white">
          The Cart is Empty!
        </div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/auth/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("JSON RESPONSE:::::", response.status);

    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div className="container m-auto mt-5">
      <div
        className="table-responsive table-responsive-sm table-responsive-md"
        style={{ maxHeight: "60vh", overflowY: "auto" }}
      >
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col">Image</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>₹{food.price}/-</td>
                <td>
                  <img
                    src={food.img}
                    alt={food.name}
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>
                  <button type="button" className="btn p-0">
                    <Trash
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sticky-footer bg-dark text-white py-3">
        <h1 className="fs-2">Total Price: ₹{totalPrice}/-</h1>
        <button className="btn bg-success mt-3" onClick={handleCheckOut}>
          Check Out
        </button>
      </div>
    </div>
  );
}
