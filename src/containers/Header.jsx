import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <label htmlFor="hamburger" className="nav__hamburger">
              ☰
            </label>
            <input type="checkbox" id="hamburger" role="button" />
            <ul className="nav__menu">
              <li className="nav__menu--item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__menu--item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav__menu--item">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav__menu--item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
