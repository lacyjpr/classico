import React from 'react';

import homeImg from '../assets/home.jpg';

const Home = () => (
  <div className="home">
    <img className="home__image" alt="sepia city skyline" src={homeImg} />
    <h2>Introduction</h2>
    <p className="home__intro">
      Lorem ipsum dolor sit amet consectetur adipiscing, elit purus volutpat
      duis eget mus arcu, pharetra nisi parturient vestibulum quisque.
    </p>
  </div>
);

export default Home;
