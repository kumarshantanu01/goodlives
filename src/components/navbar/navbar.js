import React from "react";
import "./navbar.css";

export default function navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_left">
          <div className="logo_goodlives">
            <a href="https://www.goodlives.in/">
              <img
                src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1649953007/good%20lives/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1_ennw5c.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="navbar_right">
          <h3>HOME</h3>
          <h3>HOW IT WORKS?</h3>
          <h3>FOR CORPORATES</h3>
          <h3>BLOGS</h3>
          <h3>LOGIN</h3>
          <h3>GET STARTED</h3>
        </div>
      </div>
    </>
  );
}
