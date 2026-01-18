import "./Navbar.css";
import { FaSearch, FaSun, FaGlobe, FaGithub } from "react-icons/fa";

const Navbar = () => {
  
 
  return (
    
      <nav className="navbar">
        <div className="navLeft">
          <svg width="35" height="35" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="#58c4dc"/>
            <g stroke="#58c4dc" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
          <span className="versionText">v19.2</span>
          <div className="searchBox">
            <span style={{color: '#99a1b3'}}><FaSearch /></span>
            <input type="text" placeholder="Search" className='searchInput' />
            <span className='shortcut'>Ctrl K</span>
          </div>
        </div>

        <div className='navRight'>
          <a href="#" className='navLink'>Learn</a>
          <a href="#" className='navLink'>Reference</a>
          <a href="#" className='navLink'>Community</a>
          <a href="#" className='navLink'>Blog</a>
          <div className='iconGroup'>
            <span> <FaSun /> </span>
            <span> <FaGlobe /> </span>
            <span style={{fontSize: '18px'}}><FaGithub /></span>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

