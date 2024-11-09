import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMetric, setIsMetric] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleSystem = () => {
      setIsMetric((prev) => !prev);
    };

  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
        <button
            onClick={toggleSystem}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: isHovered ? '#66B2FF' : '#ffffff',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'color',
            }}
          >
            {isMetric ? 'Imperial System' : 'Metric System'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
