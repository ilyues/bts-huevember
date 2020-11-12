import React from "react";
import "./About.css";
import Nav from "../../components/Nav";
import pic from "../../assets/huevember.jpg";

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
              <div className="body-text"></div>
            </div>
          </div>
        </div>
        <img className="drawing" src={pic} />
      </div>
    </div>
  );
}
