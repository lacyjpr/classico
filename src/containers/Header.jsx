import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <label htmlFor="hamburger" className="nav__hamburger">
          ☰
        </label>
        <input type="checkbox" id="hamburger" role="button" />
        <div className="nav__menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
