import "./email.css";

import React from "react";

export default function email() {
  return (
    <>
      <div className="email">
        <div className="email_box">
          <div className="email_heading_section">
              <h2>Join the Family !</h2>
          </div>
          <div className="email_text_section">
              <div className="email_text_box_section">
                  <input placeholder="Write your email id" className="email_input"></input>
              </div>
          </div>
          <div className="email_button_section">
            <div className="subscribe_button">
                Subscribe
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
