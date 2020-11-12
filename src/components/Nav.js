import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="nav-link">
        today's prompt
      </Link>
      <Link to="/ab" className="nav-link">
        about + guidelines
      </Link>
      <a href="#" className="nav-link">
        weekly schedule
      </a>
      <a href="#" className="nav-link">
        busy bee schedule
      </a>
    </div>
  );
}
