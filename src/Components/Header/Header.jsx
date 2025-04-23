import React from "react";
import "./Header.css";
import "../../App.css";

function Header() {
  return (
    <div className="header">
      <a href="#">
        <h1 className="fr-logo">FRATEX</h1>
      </a>
      <a href="#">
        <h1 className="ar-logo">فراتكس</h1>
      </a>
    </div>
  );
}

export default Header;
