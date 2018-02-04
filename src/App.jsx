import React from 'react';

import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';

import { Header } from './containers';
import reactLogo from './assets/React-icon.png';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <Header />
      <div>
        <h1>hello world!</h1>
        <img className="container__image" alt="react logo" src={reactLogo} />
        <p>If you see this everything is working!</p>
      </div>
      <ul className="left">
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
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
