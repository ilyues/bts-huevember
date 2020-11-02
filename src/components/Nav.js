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
      <Link to="/wkly" className="nav-link">
        weekly schedule
      </Link>
      <Link to="alt" className="nav-link">
        busy bee schedule
      </Link>
    </div>
  );
}
