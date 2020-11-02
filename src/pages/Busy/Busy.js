import React from "react";
import "./Busy.css";
import Nav from "../../components/Nav";

export default function Busy() {
  return (
    <div className="busy">
      <Nav />
      <div className="busy-container">
        <div className="body-text">
          There's nothing here yet either!! I'm sorry again :(
        </div>
      </div>
    </div>
  );
}
