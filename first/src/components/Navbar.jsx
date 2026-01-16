// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav>
//       <h1>huu</h1>
//     </nav>
//   )
// }

// export default Navbar


import React from "react";
import "./Navbar.css";
import { FaSearch, FaSun, FaGlobe, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <div className="logo">
          ⚛ <span>v19.2</span>
        </div>

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
          <span className="shortcut">Ctrl K</span>
        </div>
      </div>

      {/* Right */}
      <div className="navbar-right">
        <a href="#">Learn</a>
        <a href="#">Reference</a>
        <a href="#">Community</a>
        <a href="#">Blog</a>

        <button className="icon-btn">
          <FaSun />
        </button>
        <button className="icon-btn">
          <FaGlobe />
        </button>
        <button className="icon-btn">
          <FaGithub />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


