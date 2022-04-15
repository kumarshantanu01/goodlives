import React from "react";
import './working.css';

export default function working() {
  return (
    <>
      <div className="working">
        <div className="working_heading">How GoodLives Work</div>
        <div className="working_cards">
          <div className="working_card">
            <div className="working_card_image">
              <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1649967061/good%20lives/talking_k9pxly.png" alt="" />
            </div>
            <div className="working_card_text">
              <h3>Get Personalized Recommendations</h3>
              <h5>
                Get Mood Generated content along with recommendations
                tailor-made for You
              </h5>
            </div>
          </div>

          <div className="working_card">
            <div className="working_card_image">
              <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1649967060/good%20lives/alone_thjbqc.jpg" alt="" />
            </div>
            <div className="working_card_text">
              <h3>Affordable</h3>
              <h5>
                At GoodLives, along with affordable Therapy get much more with
                Free sign ups
              </h5>
            </div>
          </div>

          <div className="working_card">
            <div className="working_card_image">
              <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1649967059/good%20lives/istockphoto-1145914853-612x612-removebg-preview-1-300x269_czuwcg.png" alt="" />
            </div>
            <div className="working_card_text">
              <h3>Hassle Free</h3>
              <h5>
                We are there to handhold you in Your journey. Get all wellness
                tools to keep your Mental Health upright
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
