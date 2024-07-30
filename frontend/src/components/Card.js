import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();

  const priceRef = useRef();
  //useRef hook is used for price
  let options = props.options;
  //here we have to take only keys
  //keys=size=half,full
  ///values=prize=250,400
  let priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = data.find(
      (item) => item.id === props.foodItem._id && item.size === size
    );
    let finalPrice = qty * parseInt(options[size]);
    if (food) {
      // Update the existing item's quantity and price if the size matches
      await dispatch({
        type: "UPDATE",
        img: props.foodItem.img,
        id: props.foodItem._id,
        price: finalPrice,
        qty: qty,
        size: size,
      });
    } else {
      // Add a new item to the cart
      await dispatch({
        type: "ADD",
        img: props.foodItem.img,
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
      });
    }
  };

  // Calculate the final price whenever qty or size changes

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div
        className=" car card mt-3"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt={props.foodItem.name}
          style={{ height: "160px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              // we are selecting qty here so pass the priceRef here in select
              ref={priceRef}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">
              ₹{qty * parseInt(options[size])}/-
            </div>
          </div>
          <hr />
          <button
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
