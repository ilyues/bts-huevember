import React from "react";
import "./About.css";
import Nav from "../../components/Nav";
import pic from "../../assets/huevember.png";

export default function About() {
  return (
    <div className="about">
      <Nav />
      <div className="about-container">
        <div className="about-text">
          <div className="about-header">What is #BTSHuevember?</div>
          <div className="body-text">
            A month-long color challenge based on palettes from BTS MVs; a
            huevember variant by{" "}
            <a href="https://twitter.com/kayedaily_">@kayedaily_</a> and{" "}
            <a href="https://twitter.com/Katamism">@katamism</a>.
            <p />
            #BTSHuevember2020's goal is to practice making art with a limited
            palette. Every week, there will be a main BTS-inspired prompt and
            palette available. If weekly's too slow, there's also an alternate
            schedule for you busier bees!
            <p />
          </div>
          <div className="about-header">How can I join in?</div>
          <div className="about-guidelines">
            <div className="guideline">
              <div className="numbers">01.</div>
              <div className="body-text">
                You can draw anything! It does not have to be MV or BTS related.
              </div>
            </div>
            <div className="guideline">
              <div className="numbers">02.</div>
              <div className="body-text">
                Feel free to mix and match, jump around days, or adjust any of
                the palettes.
              </div>
            </div>
            <div className="guideline">
              <div className="numbers">03.</div>
              <div className="body-text">
                Anyone is free to join! Tag your art{" "}
                <a href="https://twitter.com/search?q=%23BTShuevember2020&src=typeahead_click">
                  #BTSHUEVEMBER2020
                </a>{" "}
                so everyone can see your hard work!
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="drawing" src={pic} />
    </div>
  );
}
