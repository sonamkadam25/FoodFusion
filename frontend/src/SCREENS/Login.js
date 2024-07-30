import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  }); 
  let naviagte = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //now we are hit the end point
    const responce = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await responce.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      //now here email is store in the localStorage of user
      //and when we click on the check out then we send this locastorage email credentials

      localStorage.setItem("userEmail", credentials.email);
      console.log(credentials.email);
      //now that authtoken is store in the localStorage of user
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      naviagte("/");
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className="container">
        <form
          className="w-50 m-auto mt-5 border bg-dark border-success rounded"
          onSubmit={handleSubmit}
        >
          <div className="m-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-white"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone.
            </div>
          </div>
          <div className="m-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-white"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
              name="password"
            />
          </div>
          <button to="/" type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="m-3 mx-1 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
    </div>
  );
}
