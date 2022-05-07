import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h3>HälsoSam.</h3>
      </Link>
    </div>
  );
};

export default Header;
