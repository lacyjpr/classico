import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__title">Classico</div>
        <ul>
          <li>
            <label htmlFor="hamburger" className="nav__hamburger">
              ☰
            </label>
            <input type="checkbox" id="hamburger" role="button" />
            <ul className="nav__menu">
              <li className="nav__menu--item">
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav__menu--item">
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="nav__menu--item">
                <NavLink to="/blog" activeClassName="active">
                  Blog
                </NavLink>
              </li>
              <li className="nav__menu--item">
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
