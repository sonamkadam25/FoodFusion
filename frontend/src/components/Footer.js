import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer w-100 col-md-4 d-flex align-items-center">
        <Link
          href="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        ></Link>
        <span className="mb-3 mb-md-0 text-muted">© 2024 FoodFusion</span>
      </div>
    </div>
  );
}
